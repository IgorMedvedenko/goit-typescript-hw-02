import React from "react";
import styles from "./ImageCard.module.css";
import { ImageCardProps } from "../App/App.types";

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div onClick={() => onClick(image)} className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
      />
    </div>
  );
};
export default ImageCard;
