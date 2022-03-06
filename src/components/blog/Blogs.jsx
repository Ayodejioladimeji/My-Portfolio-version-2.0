import React, { useState } from "react";
import Blog from "./Blog";
import data from "../../constants/blog";
import styles from "./Blogs.module.css";
import Title from "./../title/Title";

export const Blogs = () => {
  const [blogs] = useState(data);

  return (
    <section className={styles.blog_section}>
      <Title data-aos="fade-down" title="My Articles" />
      <div className={styles.blogs_center}>
        {blogs.map((blog, index) => {
          return <Blog key={index} {...blog} />;
        })}
      </div>
    </section>
  );
};
export default Blogs;
