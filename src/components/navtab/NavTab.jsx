import React, { useContext } from "react";

// PACKAGES
import {
  FaBloggerB,
  FaHome,
  FaProjectDiagram,
  FaRegUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// COMPONENTS
import styles from "./NavTab.module.css";
import { Context } from "./../../store/Context";

const NavTab = () => {
  const [state] = useContext(Context);
  const { menu } = state;

  return (
    <div className={menu ? styles.navtab : styles.navtabs}>
      <div className={styles.navtab_center}>
        <Link to="/">
          <div className={styles.tab_div}>
            <FaHome />
          </div>
        </Link>

        <Link to="/about">
          <div className={styles.tab_div}>
            <FaRegUser />
          </div>
        </Link>

        <Link to="/projects">
          <div className={styles.tab_div}>
            <FaProjectDiagram />
          </div>
        </Link>

        <Link to="/blogs">
          <div className={styles.tab_div}>
            <FaBloggerB />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavTab;
