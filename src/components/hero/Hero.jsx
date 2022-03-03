import React from "react";
// PACKAGES
import Typewriter from "typewriter-effect";

// COMPONENTS
import styles from "./Hero.module.css";
import { data } from "../../constants/socialLinks";
import Button from "../button/Button";
import HeroImages from "./../../constants/heroImages";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_left}>
        <div className={styles.hero_left_div}>
          <h2 className={styles.slide}>I'm</h2>
          <h1 className={styles.slide1}>
            LAYOBRIGHT<small>.</small>
          </h1>

          <div className={styles.type}>
            <Typewriter
              options={{
                strings: [
                  "I Design...",
                  "I Build...",
                  "I transform ideas into Reality...",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className={styles.touch}>
            <Button text="GET INTOUCH" />
          </div>

          <div className={styles.social_link}>
            <ul>
              {data.map((item) => {
                const { id, url, icon } = item;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.hero_right}>
        <div className={styles.hero_right_image}>
          <HeroImages />
        </div>

        <div className={styles.email}>Alayosingers@gmail.com</div>
      </div>
    </div>
  );
};

export default Hero;
