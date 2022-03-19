import React, { useContext } from "react";

// COMPONENTS
import styles from "./HeaderTab.module.css";
import gmail from "../../assets/gmail.png";
import { Context } from "./../../store/Context";

const HeaderTab = () => {
  const [state, dispatch] = useContext(Context);
  const { language_open_modal } = state;

  return (
    <div className={styles.nav_header}>
      <button
        onClick={() =>
          dispatch({
            type: "LANGUAGE_OPEN_MODAL",
            payload: !language_open_modal,
          })
        }
      >
        Reviews
      </button>

      <button className={styles.btns}>language</button>

      <div className={styles.heading}>
        <img src={gmail} alt="" />
      </div>
    </div>
  );
};

export default HeaderTab;
