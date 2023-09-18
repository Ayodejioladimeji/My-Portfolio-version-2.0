import React from "react";
import services from "../../constants/services";
import styles from "./Services.module.css";
import Title from "./../title/Title";

const Services = () => {
  return (
    <section className={styles.section}>
      <Title title="What I Offer" />

      <div className={styles.service_center}>
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article
              key={id}
              className={styles.service}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <div>{icon}</div>
              <h4 data-aos="fade-up" data-aos-once="true">
                {title}
              </h4>

              <p data-aos="fade-down" data-aos-once="true">
                {text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
