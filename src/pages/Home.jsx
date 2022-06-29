import React from "react";

// COMPONENTS
import Hero from "../components/hero/Hero";
import Jobas from "../components/jobs/Jobs";
import Projects from "../components/projects/Projects";
import Services from "../components/services/Services";
import Blogs from "../components/blog/Blogs";
import Particle from "./../components/particles/Particles";

const Home = () => {
  return (
    <>
      <Particle />
      <Hero />
      <Services />
      <Jobas />
      <Projects />
      <Blogs />
    </>
  );
};
export default Home;
