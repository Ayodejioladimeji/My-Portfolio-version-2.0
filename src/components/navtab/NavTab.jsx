import React, { useContext } from "react";

// PACKAGES
import { FaBloggerB, FaProjectDiagram, FaRegUser } from "react-icons/fa";
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
          <BsStar
            onClick={() => dispatch({ type: "OPEN_MODAL", payload: !modal })}
          />
        </div>
      </div>

      {modal && <Modal />}
    </div>
  );
};

export default NavTab;
