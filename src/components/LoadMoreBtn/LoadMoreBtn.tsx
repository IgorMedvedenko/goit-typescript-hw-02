import React from "react";
import styles from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../App/App.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button type="button" onClick={onLoadMore} className={styles.button}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
