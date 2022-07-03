import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../assets/icon.PNG";

const SEO = ({ title }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | Layobright Portfolio`}
    >
      <meta name="image" content={favicon} />
      <meta
        name="description"
        content="Object Oriented Frontend developer with three (3) years of experience building and maintaining responsive web App in the recruiting industry. As a developer, I try to create things that no one else has ever created before. I use algorithms, patterns and engineering principles to craft and mold products into something that customers will love. I care deeply about the code I write and the effect my work has on the client’s product. I enjoy interactions with clients and seeing the joy they get when I deliver the applications they’ve been wanting."
      />
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
  );
};

export default SEO;
