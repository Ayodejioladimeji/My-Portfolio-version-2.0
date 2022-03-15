import React from "react";
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa";

import styles from "../components/services/Services.module.css";

const services = [
  {
    id: 1,
    icon: <FaCode className={styles.service_icon} />,
    title: "web development",
    text: `Object Oriented Frontend developer with passion for responsive website design and a firm believer in the mobile-first approach.`,
  },
  {
    id: 2,
    icon: <FaSketch className={styles.service_icon} />,
    title: "web design",
    text: `Designed an ecommerce webapp to sell baseball hats,Created a mobile website for a free online videos.`,
  },
  {
    id: 3,
    icon: <FaAndroid className={styles.service_icon} />,
    title: "Mobile Application",
    text: `Hard-working Native Mobile App developer with a flair for creating elegant solutions in the least amount of time.`,
  },
  // {
  //   id: 4,
  //   icon: <FaAndroid className="service-icon icon-scroll" />,
  //   title: "Database Development",
  //   text: `Hard-working Native Mobile App developer with a flair for creating elegant solutions in the least amount of time.`,
  // },
];

export default services;
