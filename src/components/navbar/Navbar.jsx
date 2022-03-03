import React from "react";
// PACKAGES
import { Link } from "react-router-dom";
import { FaUikit } from "react-icons/fa";

// COMPONENTS
import styles from "./Navbar.module.css";
import NavLinks from "./../navlinks/NavLinks";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
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
  );
};

export default Navbar;
