import React from "react";
import { data } from "../../constants/socialLinks";
import ScrollToTop from "react-scroll-to-top";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ScrollToTop smooth className={styles.scroll} />
      <div>
        <div className={styles.social_links}>
          <ul>
            {data.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> AYODEJI OLADIMEJI </span>
        </h4>

        <small className={styles.layo}>
          Developed By @LayoBright
          <span aria-label="" role="img">
            &#128526;
          </span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
