import React, { useState } from "react";

import { FaGithubSquare, FaShareSquare } from "react-icons/fa";

import styles from "./Projects.module.css";

const Project = ({ description, title, github, stack, url, image, index }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className={styles.project}>
      <div className={styles.project_img}>
        <img src={image} alt="project" />
      </div>

      <div className={styles.project_info}>
        <h3>{title || "default title"}</h3>

        <p className={styles.project_desc}>
          {readMore ? description : `${description.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : " read more"}
          </button>
        </p>

        <div className={styles.project_stack}>
          <span>{stack}</span>
        </div>

        <div className={styles.project_links}>
          <a href={github}>
            <FaGithubSquare className={styles.project_icon} />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <FaShareSquare className={styles.project_icon} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
