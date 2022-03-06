import React from "react";
import styles from "./Blogs.module.css";

const Blog = ({ title, image, slug, desc, url }) => {
  return (
    <article className={styles.blog}>
      <img src={image} alt="blog-post" className={styles.blog_img} />
      <div className={styles.blog_card}>
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className={styles.blog_footer}>
          <a href={url} target="_blank" rel="noreferrer">
            <p>{slug}</p>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Blog;
