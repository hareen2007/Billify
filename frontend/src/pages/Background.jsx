import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  return (
    <Particles
      id="tsparticles"
      init={async (engine) => {
        console.log("INIT");
        await loadSlim(engine);
        console.log("SLIM LOADED");
      }}
      particlesLoaded={async (container) => {
        console.log("LOADED:", container);
      }}
      options={{
        particles: {
          number: {
            value: 50,
          },
          move: {
            enable: true,
          },
        },
      }}
    />
  );
}