import React from "react";
import RiseLoader from "react-spinners/RiseLoader";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <RiseLoader color="#3f51b5" size={15} />
    </div>
  );
};
export default Loader;
