import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import styles from "./App.module.css";

const API_KEY = "9WPYF8BpnlcoUXbnBOGA5sPo9D1J4o53GGPjjbjaZyc";

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    fetchImages();
  }, [query, page]);

  const fetchImages = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${API_KEY}`
      );
      if (page === 1) {
        setImages(response.data.results);
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      }
    } catch (error) {
      setError(error);
      toast.error("Failed to load images.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (newQuery) => {
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

  function openModal(image) {
    setModalImage(image);
  }

  function closeModal() {
    setModalImage(null);
  }

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
}
