import React from "react";
import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button type="button" onClick={onLoadMore} className={styles.button}>
      Load more
    </button>
  );
}
