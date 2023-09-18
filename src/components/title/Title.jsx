import React from "react";

import styles from "./Title.module.css";

const Title = ({ title, length }) => {
  return (
    <div className={styles.section_title}>
      <h2 data-aos="fade-down" data-aos-once="true">
        {title || "Featured Projects"}
      </h2>
      <div
        data-aos="fade-right"
        data-aos-once="true"
        className={styles.underline}
      ></div>
    </div>
  );
};

export default Title;
