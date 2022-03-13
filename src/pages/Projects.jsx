import React, { useState } from "react";

// COMPONENTS
import Project from "../components/projects/Project";
import styles from "../components/projects/Projects.module.css";
import data from "../constants/projects";
import Title from "./../components/title/Title";

const ProjectsPage = () => {
  const [projects] = useState(data);

  return (
    <>
      <section style={{ marginTop: "50px" }} className={styles.projects}>
        <Title title="All Projects" />
        <div className={styles.projects_center}>
          {projects.map((project, index) => {
            return <Project key={index} {...project} />;
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
