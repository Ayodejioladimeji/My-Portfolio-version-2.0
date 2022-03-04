import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <Particles
      id="particles-js"
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          color: {
            value: "#00ff00",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.8,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#d919ce",
            opacity: 0,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5782952832645452,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
      }}
    />
  );
};

export default Particle;
