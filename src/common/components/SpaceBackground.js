import React, { useRef } from "react";

import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import Planet from "./Planet";

function SpaceBackground({ image, refNone }) {
  const backgroundAnimation = useRef();
  useFrame(() => {
    backgroundAnimation.current.rotation.x += 0.0025;
    backgroundAnimation.current.rotation.y += 0.0005;
  });

  return (
    <group>
      <Stars
        ref={backgroundAnimation}
        radius={100}
        count={5000}
        factor={4}
        saturation={0}
        depth={100}
        fade
      />
      <Planet image={image} refNone={refNone} />
    </group>
  );
}

export default SpaceBackground;
