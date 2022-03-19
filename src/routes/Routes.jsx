import React from "react";

// PACKAGES
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Home from "../pages/Home";
import Projects from "./../pages/Projects";
import About from "./../pages/About";
import Blogs from "./../pages/Blogs";

const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/" exact component={Onboarding} /> */}
      <Route path="/" exact component={Home} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/about" exact component={About} />
      <Route path="/blogs" exact component={Blogs} />
    </Switch>
  );
};

export default Routes;
