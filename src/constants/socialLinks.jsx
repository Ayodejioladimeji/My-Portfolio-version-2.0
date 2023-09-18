import React from "react";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
import styles from "../components/hero/Hero.module.css";

export const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className={styles.social_icon}></FaFacebookSquare>,
    url: "https://web.facebook.com/alayosingers",
  },
  {
    id: 2,
    icon: <FaLinkedin className={styles.social_icon}></FaLinkedin>,
    url: "https://www.linkedin.com/in/layobright",
  },
  {
    id: 4,
    icon: <FaGithub className={styles.social_icon}></FaGithub>,
    url: "https://github.com/Ayodejioladimeji",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className={styles.social_icon}></FaTwitterSquare>,
    url: "https://twitter.com/LayoBright",
  },
  {
    id: 6,
    icon: <FaDribbbleSquare className={styles.social_icon}></FaDribbbleSquare>,
    url: "https://dribbble.com/LayoBright",
  },
];
