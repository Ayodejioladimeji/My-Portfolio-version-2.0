import React, { useState, useEffect, useRef } from "react";

// PACKAGES
import Typewriter from "typewriter-effect";
import { FiPower } from "react-icons/fi";

// COMPONENTS
import styles from "./Onboarding.module.css";
import Particles from "../particles/Particles";
// import car from "../../assets/car.png";

const Onboarding = ({ pageLoad, setPageLoad }) => {
  const [progress, setProgress] = useState(0);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
  };

  useEffect(() => {
    if (pageLoad) {
      id.current = window.setInterval(() => {
        setProgress((progress) => progress + 10);
      }, 900);
      return () => clear();
    }
  }, [pageLoad]);

  useEffect(() => {
    if (progress === 100) {
      clear();
    }
  }, [progress]);

  return (
    <div className={styles.onboarding}>
      <div className={styles.onboard_div}>
        <Particles />

        {!pageLoad ? (
          <div className={styles.switch}>
            <FiPower
              onClick={() => setPageLoad(true)}
              className={styles.switch_icon}
            />
          </div>
        ) : (
          <>
            <div className={styles.type}>
              <Typewriter
                options={{
                  strings: ["Thank you for contacting Layobright"],
                  autoStart: true,
                  loop: true,
                  delay: 200,
                  pauseFor: 1112500,
                }}
              />
            </div>

            <div className={styles.progress_strength}>
              <progress max="100" value={progress} className="strength" />
              <small>{progress}% Complete</small>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
