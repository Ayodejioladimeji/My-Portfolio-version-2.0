import React from "react";

// COMPONENTS
import stack from "../../constants/stack";
import Title from "./../title/Title";
import styles from "./About.module.css";

const About = ({ ...item }) => {
  const { image, title, info } = item;
  return (
    <>
      <img src={image} alt="about-me" className={styles.about_img} />
      <article className={styles.about_text}>
        <Title title={title} />
        <p data-aos="flip-right" data-aos-once="true">
          {info}
        </p>
        <div className={styles.about_stack}>
          {stack.map((data) => {
            const { id, stack } = data;
            return (
              <span key={id} data-aos="flip-right" data-aos-once="true">
                {stack}
              </span>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default About;
