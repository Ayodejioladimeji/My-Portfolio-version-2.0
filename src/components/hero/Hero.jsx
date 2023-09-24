import React, { useEffect, useContext, useState } from "react";
// PACKAGES
import Typewriter from "typewriter-effect";
import Aos from "aos";

// COMPONENTS
import styles from "./Hero.module.css";
import { data } from "../../constants/socialLinks";
import Button from "../button/Button";
import HeroImages from "./../../constants/heroImages";
// import Particle from "../particles/Particles";
import { Context } from "./../../store/Context";
// import image2 from "../../assets/images/image2.jpg";
import image2 from "../../assets/images/image11.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [state] = useContext(Context);
  const { nav } = state;
  // const [start, setStart] = useState()
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  setTimeout(() => {
    setCallback(!callback);
  }, 5000);

  return (
    <>
      {/* <Particle /> */}
      <div className={styles.hero}>
        <div className={styles.hero_left}>
          <div className={styles.hero_left_div}>
            <h2
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="400"
              className={styles.slide}
            >
              I'm
            </h2>
            <h1
              data-text=" &nbsp;Layobright"
              className={styles.slide1}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="800"
            >
              Layobright<small>.</small>
              &nbsp;
            </h1>

            <div
              className={styles.type}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="1600"
            >
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
            <Link to="/projects">
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="2000"
                className={styles.touch}
              >
                <Button text="Explore Today" />
              </div>
            </Link>

            {!nav && (
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
            )}
          </div>
        </div>

        <div className={styles.hero_right}>
          <div className={styles.hero_right_image}>
            <HeroImages />
            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-delay="500"
              className={styles.hero_round}
            >
              <img src={image2} alt="" />
            </div>
          </div>

          {!nav && <div className={styles.email}>Alayosingers@gmail.com</div>}
        </div>
      </div>
    </>
  );
};

export default Hero;
