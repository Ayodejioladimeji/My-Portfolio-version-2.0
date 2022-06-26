import React, { useContext, useRef } from "react";

// PACKAGES

// COMPONENTS
import styles from "./LanguageModal.module.css";
import { Context } from "./../../store/Context";

const Modal = () => {
  const [state, dispatch] = useContext(Context);
  const clickRef = useRef();

  // HANDLECLICK OUTSIDE SIDE EFFECT
  const handleClickOutside = (e) => {
    if (clickRef.current && !clickRef.current.contains(e.target)) {
      return dispatch({ type: "LANGUAGE_OPEN_MODAL", payload: false });
    }
  };

  window.document.addEventListener("mousedown", handleClickOutside);

  console.log(state);

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer} ref={clickRef}></div>
    </div>
  );
};

export default Modal;
