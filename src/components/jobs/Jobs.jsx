import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import Title from "./../title/Title";
import job from "./../../constants/jobs";
import styles from "./Jobs.module.css";

const Jobas = () => {
  const [value, setValue] = useState(0);
  const [jobs] = useState(job);

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className={styles.jobs}>
      <Title title="Where i've worked" />

      <div className={styles.jobs_center}>
        <div className={styles.btn_container}>
          {jobs.map((item, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                className={`${styles.job_btn} ${
                  index === value && styles.active_btn
                }`}
              >
                {item.company}
              </button>
            );
          })}
        </div>

        {/* THE SECTION OF THE JOB INFORMATION */}
        <article className={styles.job_info}>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className={styles.job_date}>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className={styles.job_desc}>
                <IoMdArrowDropright
                  className={styles.job_icon}
                ></IoMdArrowDropright>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Jobas;
