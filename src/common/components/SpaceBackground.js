import React, { useRef } from "react";

import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import Planet from "./Planet";

function SpaceBackground() {
  const background = useRef();

  useFrame(() => {
    background.current.rotation.x += 0.0025;
    background.current.rotation.y += 0.0005;
  });

  return (
    <group ref={background}>
      <Stars
        radius={100}
        count={5000}
        factor={4}
        saturation={0}
        depth={100}
        fade
      />
      <Planet />
    </group>
  );
}

export default SpaceBackground;
