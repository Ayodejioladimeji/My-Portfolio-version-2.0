import React, { useState, useEffect, useContext, useRef } from "react";

// PACKAGES

// COMPONENTS
import styles from "./LanguageModal.module.css";
import { Context } from "./../../store/Context";
import { useTranslation } from "react-i18next";

// COUNTRIES
import us from "../../assets/languages/us.png";
import uk from "../../assets/languages/uk.png";
import turkey from "../../assets/languages/turkey.png";
import japan from "../../assets/languages/japan.png";
import france from "../../assets/languages/france.png";
import australia from "../../assets/languages/australia.png";
// import india from "../../assets/languages/india.png";

const Modal = () => {
  const [state, dispatch] = useContext(Context);
  const clickRef = useRef();

  const { t } = useTranslation();

  // save language
  const saveLang = (lang) => {
    localStorage.setItem("myLanguage", lang);
    window.location.reload();
  };

  // HANDLECLICK OUTSIDE SIDE EFFECT
  const handleClickOutside = (e) => {
    if (clickRef.current && !clickRef.current.contains(e.target)) {
      return dispatch({ type: "LANGUAGE_OPEN_MODAL", payload: false });
    }
  };

  window.document.addEventListener("mousedown", handleClickOutside);

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer} ref={clickRef}>
        <div className={styles.modal_box}>
          <div>
            <button value="en" onClick={(e) => saveLang(e.target.value)}>
              <img src={uk} alt="English (UK)" title="English" />
              <span>English (UK)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
