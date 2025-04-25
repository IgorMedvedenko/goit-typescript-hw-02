export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  likes: number;
  description: string;
  user: {
    name: string;
  };
}

export interface ErrorMessageProps {
  message: string;
}

export interface ImageCardProps {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}

export interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}

export interface ImageModalProps {
  image: UnsplashImage | null;
  onClose: () => void;
}

export interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}
