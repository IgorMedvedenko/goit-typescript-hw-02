import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { ImageModalProps } from "../App/App.types";

Modal.setAppElement("#modal-root");
const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  const isOpen = Boolean(image);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {image && (
        <>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={styles.image}
          />
          <p className={styles.text}>Likes: {image.likes}</p>
          <p className={styles.text}>Description: {image.description}</p>
          <p className={styles.text}>Author: {image.user.name}</p>
        </>
      )}
      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
