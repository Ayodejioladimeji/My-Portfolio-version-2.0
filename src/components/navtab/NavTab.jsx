import React, { useContext } from "react";

// PACKAGES
import { FaBloggerB, FaProjectDiagram, FaRegUser } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { Link } from "react-router-dom";

// COMPONENTS
import styles from "./NavTab.module.css";
import { Context } from "./../../store/Context";

const NavTab = () => {
  const [state] = useContext(Context);
  const { scroll } = state;

  return (
    <div className={scroll === 100 ? styles.none : styles.navtab}>
      <div className={styles.navtab_center}>
        <div className={styles.tab_div}>
          <Link to="/profile">
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
