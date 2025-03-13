import React from "react";
import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return <p className={styles.message}>{message}</p>;
}
