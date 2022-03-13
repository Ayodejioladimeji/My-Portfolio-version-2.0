import React from "react";
import about from "../constants/about";
import styles from "../components/about/About.module.css";

const About = () => {
  return (
    <section className={styles.about_page}>
      <div className={styles.about_center}>
        {about.map((item) => {
          return <About {...item} />;
        })}
      </div>
    </section>
  );
};

export default About;
