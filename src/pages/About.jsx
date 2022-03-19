import React from "react";
import about from "../constants/about";
import styles from "../components/about/About.module.css";
import AboutMe from "../components/about/About";
import Title from "../components/title/Title";

const About = () => {
  return (
    <section className={styles.about_page}>
      <div className={styles.about_box}>
        <Title title="About Me" />
        <div className={styles.about_center}>
          {about.map((item) => {
            return <AboutMe {...item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
