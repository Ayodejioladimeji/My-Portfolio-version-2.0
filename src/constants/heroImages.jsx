import React from "react";
import styles from "./heroImages.module.css";

import atom from "../assets/atom.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import html5 from "../assets/html5.png";
import js from "../assets/js.png";
import typescript from "../assets/typescript.png";
import next from "../assets/next.png";
import nodejs from "../assets/nodejs.png";
import php from "../assets/php.png";
import tdd from "../assets/tdd.png";
import jquery from "../assets/jquery.jpg";
import visualbasic from "../assets/visualbasic.png";
import testing from "../assets/testing.png";
import git from "../assets/git.png";
import heroku from "../assets/heroku.png";

const heroImages = () => {
  return (
    <>
      <img src={atom} alt="atom" className={styles.atom} />
      <img src={bootstrap} alt="atom" className={styles.atom} />
      <img src={typescript} alt="atom" className={styles.atom} />
      <img src={html5} alt="atom" className={styles.atom} />
      <img src={github} alt="atom" className={styles.atom} />
      <img src={tdd} alt="atom" className={styles.atom} />
      <img src={next} alt="atom" className={styles.atom} />
      <img src={js} alt="atom" className={styles.atom} />
      <img src={php} alt="atom" className={styles.atom} />
      <img src={testing} alt="atom" className={styles.atom} />
      <img src={nodejs} alt="atom" className={styles.atom} />
      <img src={visualbasic} alt="atom" className={styles.atom} />
      <img src={jquery} alt="atom" className={styles.atom} />
      <img src={heroku} alt="atom" className={styles.atom} />
      <img src={git} alt="atom" className={styles.atom} />
    </>
  );
};

export default heroImages;
