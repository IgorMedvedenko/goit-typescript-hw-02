import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.image}
      />
      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
    </Modal>
  );
}
