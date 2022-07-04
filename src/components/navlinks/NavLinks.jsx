import React from "react";
// PACKAGES
import { Link } from "react-router-dom";

// COMPONENTS
import { links } from "../../constants/links";
import styles from "./NavLinks.module.css";
import gmail from "../../assets/gmail.png";

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
      <div className={styles.heading}>
        <a
          href="mailto:alayosingers@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gmail} alt="" />
        </a>
      </div>
    </ul>
  );
};

export default NavLinks;
