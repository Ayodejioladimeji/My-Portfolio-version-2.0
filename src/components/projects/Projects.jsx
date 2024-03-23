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
  const [tab, setTab] = useState(1)
  
  // 
  const handleClick = (id) => {
    setTab(id)
  }

  //filter projects for web and mobile

  // 
  return (
    <section className={styles.projects}>
      <Title title={title} />

      {/* tab section */}
      <div className={styles.project_tab}>
        <button className={tab === 1 ? styles.active : ""} onClick={() => handleClick(1)}>Web</button>
        <button className={tab === 2 ? styles.active : ""} onClick={() => handleClick(2)}>Mobile</button>
      </div>

      {tab === 1 && <div className={`${styles.projects_center}`}>
        {projects.filter(item => item.category === "web").slice(0, 6).map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </div>}

      {tab === 2 && <div className={`${styles.projects_center}`}>
        {projects?.filter(item => item.category === "mobile").map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </div>}

      <div className={styles.center_btn}>
        <Link to="/projects">
          <Button text="All Projects" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
