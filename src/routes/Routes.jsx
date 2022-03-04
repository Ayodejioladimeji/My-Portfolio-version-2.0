import React, { useEffect } from "react";

// PACKAGES
import { Switch, Route } from "react-router-dom";
import Aos from "aos";

// COMPONENTS
import Home from "../pages/Home";
// import Onboarding from "./../pages/Onboarding";

const Routes = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1500 });
  // }, []);

  return (
    <Switch>
      {/* <Route path="/" exact component={Onboarding} /> */}
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
