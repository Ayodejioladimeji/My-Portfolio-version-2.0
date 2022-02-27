import React from "react";
// PACKAGES
import { Link } from "react-router-dom";

// COMPONENTS
import { links } from "../../constants/links";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <ul className={styles.nav_links}>
      {links.map((item) => {
        //    Destructuring
        const { id, text, url } = item;
        return (
          <li key={id}>
            <Link to={url}>
              <span>0{id}.</span> {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
