import React, { useState } from "react";

// COMPONENTS
import styles from "../components/blog/Blogs.module.css";
import Blog from "./../components/blog/Blog";
import data from "../constants/blog";
import Title from "./../components/title/Title";

export const Blogs = () => {
  const [blogs] = useState(data);

  return (
    <section className={styles.blog_section}>
      <div className={styles.blog_box}>
        <Title title="All Blogs" />
        <div className={styles.blogs_center}>
          {blogs.map((blog, index) => {
            return <Blog key={index} {...blog} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Blogs;
