import React from "react";

// COMPONENTS
import Hero from "../components/hero/Hero";
import Jobas from "../components/jobs/Jobs";
import Services from "../components/services/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Jobas />
    </>
  );
};
export default Home;
