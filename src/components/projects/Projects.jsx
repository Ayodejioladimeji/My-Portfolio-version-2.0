import React, { useState } from "react";

// PACKAGES
import { Link } from "react-router-dom";

// COMPONENTS
import Project from "./Project";
import data from "../../constants/projects";
import styles from "./Projects.module.css";
import Title from "./../title/Title";
import Button from "./../button/Button";

const Projects = ({ title }) => {
  const [projects] = useState(data);
  let featuredProjects = projects.filter((item) => item.featured === true);

  return (
    <section className={styles.projects}>
      <Title title={title} length={featuredProjects.length} />

      <div className={`${styles.projects_center}`}>
        {featuredProjects.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </div>

      <div className={styles.center_btn}>
        <Link to="/projects">
          <Button text="All Projects" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
