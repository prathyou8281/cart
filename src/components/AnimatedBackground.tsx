"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function AnimatedBackground() {
  const init = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        background: { color: { value: "#000000" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#00ffff" },
          links: { color: "#00ffff", distance: 150, enable: true, opacity: 0.3, width: 1 },
          move: { enable: true, speed: 2 },
          number: { value: 60 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
