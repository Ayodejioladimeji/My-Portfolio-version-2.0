import React from "react";

// PACKAGES
import { FaBloggerB, FaProjectDiagram, FaRegUser } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { Link } from "react-router-dom";

// COMPONENTS
import styles from "./NavTab.module.css";

const NavTab = () => {
  return (
    <div className={styles.navtab}>
      <div className={styles.navtab_center}>
        <div className={styles.tab_div}>
          <Link to="/about">
            <FaRegUser />
          </Link>
        </div>

        <div className={styles.tab_div}>
          <Link to="/projects">
            <FaProjectDiagram />
          </Link>
        </div>

        <div className={styles.tab_div}>
          <Link to="/blog">
            <FaBloggerB />
          </Link>
        </div>

        <div className={styles.tab_div}>
          <Link to="/contact">
            <SiGooglemessages />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavTab;
