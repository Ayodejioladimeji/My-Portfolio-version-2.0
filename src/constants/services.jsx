import React from "react";
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa";

import styles from "../components/services/Services.module.css";

const services = [
  {
    id: 1,
    icon: <FaCode className={styles.service_icon} />,
    title: "web development",
    text: `Harness the power of the web with expert web development services. 
    I breathe life into your digital ideas, crafting functional and visually stunning 
    websites tailored to your unique needs, Using the latest technologies and best practices 
    to ensure your web presence is not only aesthetically pleasing but also highly functional.`,
  },
  {
    id: 2,
    icon: <FaSketch className={styles.service_icon} />,
    title: "web design",
    text: `Transform your online identity with captivating web design services. 
    I understand that the first impression matters, and your website's design is 
    the gateway to your brand. As a talented designer I blend creativity with functionality
     to craft visually appealing and user-friendly websites. Let's shape your digital aesthetics
        and make your online presence a true work of art.`,
  },
  {
    id: 3,
    icon: <FaAndroid className={styles.service_icon} />,
    title: "Mobile Application",
    text: `In a mobile-first world, your business needs a strong presence on
     smartphones and tablets. I specialize in creating responsive and 
     feature-rich mobile apps that captivate users and drive engagement. 
     From iOS to Android, I excel in delivering seamless user experiences
      through intuitive interfaces and cutting-edge technology. 
      Elevate your brand with mobile solutions and stay ahead in
       the mobile app ecosystem.`,
  },
  // {
  //   id: 4,
  //   icon: <FaAndroid className="service-icon icon-scroll" />,
  //   title: "Database Development",
  //   text: `Hard-working Native Mobile App developer with a flair for creating elegant solutions in the least amount of time.`,
  // },
];

export default services;
