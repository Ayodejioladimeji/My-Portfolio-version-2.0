import React, { useContext } from "react";

// PACKAGES
import {
  FaBloggerB,
  FaHome,
  FaProjectDiagram,
  FaRegUser,
} from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

// COMPONENTS
import styles from "./NavTab.module.css";
import { Context } from "./../../store/Context";
import Modal from "../modal/Modal";

const NavTab = () => {
  const [state, dispatch] = useContext(Context);
  const { scroll, modal } = state;

  return (
    <div className={scroll === 100 ? styles.none : styles.navtab}>
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
