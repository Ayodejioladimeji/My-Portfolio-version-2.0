import React from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";
import SEO from "./../common/SEO";

const Error = () => {
  return (
    <>
      <SEO title="Dead End" />
      <main className={styles.error_page}>
        <div className={styles.error_container}>
          <h1>Please do not try to come here next time</h1>
          <p>Kindly go back go and keep Exploring</p>
          <h3>LAYOBRIGHT</h3>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </>
  );
};

export default Error;
