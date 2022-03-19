import React from "react";

// COMPONENTS
import stack from "../../constants/stack";

import styles from "./About.module.css";

const About = ({ ...item }) => {
  const { image, info } = item;
  return (
    <>
      <img src={image} alt="about-me" className={styles.about_img} />
      <article className={styles.about_text}>
        <p data-aos="flip-right" data-aos-once="true">
          {info}
        </p>
        <div className={styles.about_stack}>
          {stack.map((data) => {
            const { id, stack } = data;
            return (
              <div key={id} className={styles.stacks}>
                {stack}
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default About;
