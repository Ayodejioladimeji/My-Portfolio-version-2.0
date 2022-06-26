import React, { useEffect, useContext } from "react";
// PACKAGES
import { Link } from "react-router-dom";
import { FaUikit } from "react-icons/fa";

// COMPONENTS
import styles from "./Navbar.module.css";
import NavLinks from "./../navlinks/NavLinks";
import { Context } from "./../../store/Context";
import LanguageModal from "../languagemodal/LanguageModal";
import HeaderTab from "../headertab/HeaderTab";

const Navbar = () => {
  const [state, dispatch] = useContext(Context);
  const { nav, scroll, language_open_modal } = state;

  // CHANGE BACKGROUND ON SCROLL
  useEffect(() => {
    const removeNav = () => {
      if (window.scrollY >= 10) {
        dispatch({ type: "REMOVE_NAV", payload: true });
      } else {
        dispatch({ type: "REMOVE_NAV", payload: false });
      }
    };
    window.addEventListener("scroll", removeNav);
  }, [dispatch]);

  // SCROLL INDICATOR

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (winScroll / height) * 100;

      dispatch({ type: "REMOVE_TAB", payload: scrolled });
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch]);

  return (
    <>
      <nav className={nav ? styles.active : styles.navbar}>
        <div className={styles.nav_center}>
          {/* THE SECTION OF THE HEADER LOGO */}
          <div className={styles.nav_header}>
            <Link to="/">
              <FaUikit className={styles.logo_btn} />
            </Link>
          </div>

          {/* THE SECTION OF THE NAVBAR LINKS */}
          {/* {!nav && <NavLinks />} */}
          {!nav ? <NavLinks /> : <HeaderTab />}
        </div>

        {language_open_modal && <LanguageModal />}
      </nav>

      {/* {nav && ( */}
      <div className={styles.indicator}>
        <div style={{ width: `${scroll}%` }} className={styles.progress}></div>
      </div>
      {/* )} */}
    </>
  );
};

export default Navbar;
