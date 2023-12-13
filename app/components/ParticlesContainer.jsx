import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

  const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

    return (
      <Particles
  className="particles"
  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  options={{
    particles: {
      shape: {
        type: "image",
        image: {
           src: "./react.svg", // Set image path.
           width: 1,   // Width and height don't decide size.
           height: 1   // They just decide aspect ratio.
        }
      },
      number: {
        value: 3,
        density: {
          enable: true,
          value_area: 500
        }
      },
      color: {
        value: "#fff"
      },
      opacity: {
        value: 1,
        anim: {
          enable: true,
          speed: 8,
          opacity_min: 0.4,
          sync: false
        }
      },
      size: {
        value: {min:10,max:20},
        random: true
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "down",
        straight: true
      }
    },
    fpsLimit:360,
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: false,
          mode: 'push',
        },
        resize: true,
        modes : {
          push:{
            quantity:10
          },
          repulse:{
              distance:1,
              duration:0.4,
          }
        }
      }
    }
  }}
/>
    );
  };

  export default ParticleBackground;