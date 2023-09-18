import React, { useContext } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
// import { useTranslation } from "react-i18next";

// COMPONENTS
import styles from "./HeaderTab.module.css";
import { Context } from "./../../store/Context";

const HeaderTab = () => {
  const [state, dispatch] = useContext(Context);
  const { menu } = state;
  // const { language_open_modal } = state;

  // const { t } = useTranslation();

  // save language
  // const saveLang = (lang) => {
  //   localStorage.setItem("myLanguage", lang);
  //   // window.location.reload();
  // };

  return (
    <div className={styles.nav_header}>
      {/* <button
        onClick={() =>
          dispatch({
            type: "LANGUAGE_OPEN_MODAL",
            payload: !language_open_modal,
          })
        }
      >
        Reviews
      </button>

      <select type="button" onChange={(e) => saveLang(e.target.value)}>
        <option style={{ background: "rgb(5, 1, 19)" }}>Change Language</option>
        <option style={{ background: "rgb(5, 1, 19)" }} value="en">
          English
        </option>
        <option style={{ background: "rgb(5, 1, 19)" }} value="fr">
          French
        </option>
        <option style={{ background: "rgb(5, 1, 19)" }} value="ch">
          Chinese
        </option>
        <option style={{ background: "rgb(5, 1, 19)" }} value="de">
          German
        </option>
        <option style={{ background: "rgb(5, 1, 19)" }} value="ar">
          Arabic
        </option>
      </select> */}

      <div
        className={styles.heading}
        onClick={() => dispatch({ type: "MENU_OPEN", payload: !menu })}
      >
        <RiMenuFoldLine className={styles.tab_menu} />
      </div>
    </div>
  );
};

export default HeaderTab;
