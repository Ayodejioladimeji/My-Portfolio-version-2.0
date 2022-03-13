import React from "react";

// PACKAGES
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Home from "../pages/Home";
import Projects from "./../pages/Projects";

const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/" exact component={Onboarding} /> */}
      <Route path="/" exact component={Home} />
      <Route path="/projects" exact component={Projects} />
    </Switch>
  );
};

export default Routes;
