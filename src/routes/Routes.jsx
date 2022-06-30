import React, { useEffect } from "react";

// PACKAGES
import { Switch, Route, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

// COMPONENTS
import Home from "../pages/Home";
import Projects from "./../pages/Projects";
import About from "./../pages/About";
import Blogs from "./../pages/Blogs";
import Error from "./../pages/Error";

const Routes = () => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Scroll page to top when route changes
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <Switch>
      {/* <Route path="/" exact component={Onboarding} /> */}
      <Route path="/" exact component={Home} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/about" exact component={About} />
      <Route path="/blogs" exact component={Blogs} />

      <Route component={Error} />
    </Switch>
  );
};

export default Routes;
