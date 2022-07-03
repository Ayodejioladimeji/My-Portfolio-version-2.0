import React from "react";
import { FiCheckSquare } from "react-icons/fi";

// COMPONENTS
import stack from "../../constants/stack";

import styles from "./About.module.css";

const About = ({ ...item }) => {
  const { image, info } = item;
  return (
    <>
      <img src={image} alt="about-me" className={styles.about_img} />
      <article className={styles.about_text}>
        {info.map((item) => (
          <p key={item.id} data-aos="flip-right" data-aos-once="true">
            <FiCheckSquare className={styles.about_icon} />
            {item}
          </p>
        ))}
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
