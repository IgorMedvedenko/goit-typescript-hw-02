import React from "react";
import styles from "../ErrorMessage/ErrorMessage.module.css";
import { ErrorMessageProps } from "../App/App.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};
export default ErrorMessage;
