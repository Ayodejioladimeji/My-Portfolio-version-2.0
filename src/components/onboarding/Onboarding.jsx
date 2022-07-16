import React, { useState, useEffect, useRef } from "react";

// PACKAGES
import Typewriter from "typewriter-effect";

// COMPONENTS
import styles from "./Onboarding.module.css";
import Particles from "../particles/Particles";
import image3 from "../../assets/images/image3.jpg";

const Onboarding = () => {
  const [progress, setProgress] = useState(0);
  const [slide, setSlide] = useState(false);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setProgress((progress) => progress + 1);
    }, 140);
    return () => clear();
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setSlide(true);
      clear();
    }
  }, [progress]);

  return (
    <div className={styles.onboarding}>
      <div className={styles.onboard_div}>
        <Particles />

        <div
          data-aos="zoom-in"
          data-aos-once="true"
          className={styles.box}
        ></div>
        <div className={styles.progress_strength}>
          <progress max="100" value={progress} className="strength" />
          <small data-aos="fade-in" data-aos-once="true">
            {progress}% Complete
          </small>
        </div>

        <div data-aos="fade-up" data-aos-once="true" className={styles.type}>
          <Typewriter
            options={{
              strings: ["Thank you for contacting Layobright"],
              autoStart: true,
              loop: true,
              delay: 300,
              pauseFor: 1112500,
            }}
          />
        </div>
      </div>

      {/* <div className={slide ? styles.onboard_slide : styles.onboard_slid}>
        <div className={styles.slide_img}>
          <img src={image3} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Onboarding;
