import React, { useState, useEffect } from "react";
// PACKAGES
import { Link } from "react-router-dom";
import { FaUikit } from "react-icons/fa";

// COMPONENTS
import styles from "./Navbar.module.css";
import NavLinks from "./../navlinks/NavLinks";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(0);

  // CHANGE BACKGROUND ON SCROLL
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  // SCROLL INDICATOR
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <NavLinks />
        </div>
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
