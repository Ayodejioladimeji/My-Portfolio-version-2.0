import React from "react";

// COMPONENTS
import styles from "./Button.module.css";

const Button = ({ text }) => {
  return (
    <button className={`${styles.btn} ${styles.btn_slide}`}>{text}</button>
  );
};

export default Button;
