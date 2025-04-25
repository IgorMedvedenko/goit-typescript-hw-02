import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import styles from "../App/App.module.css";
import { UnsplashImage } from "./App.types";

const API_KEY = "9WPYF8BpnlcoUXbnBOGA5sPo9D1J4o53GGPjjbjaZyc";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState<UnsplashImage | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=9WPYF8BpnlcoUXbnBOGA5sPo9D1J4o53GGPjjbjaZyc`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch images: ${response.status}`);
      }

      const data = await response.json();

      if (page === 1) {
        setImages(data.results);
      } else {
        setImages((prevImages) => [...prevImages, ...data.results]);
      }
    } catch (error: any) {
      setError(error);
      toast.error("Failed to load images.");
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    if (!query) return;
    fetchImages();
  }, [query, page, fetchImages]);

  const handleSearchSubmit = (newQuery: string) => {
    if (!newQuery.trim()) {
      toast.error("Please enter a search query.");
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: UnsplashImage) => {
    setModalImage(image);
  };
  const closeModal = () => {
    setModalImage(null);
    setIsOpen(false);
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message="Failed to load images." />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <ImageModal image={modalImage} onClose={closeModal} />
      <Toaster />
    </div>
  );
};

export default App;
