import React from "react";
import RiseLoader from "react-spinners/RiseLoader";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <RiseLoader color="#3f51b5" size={15} />
    </div>
  );
}
