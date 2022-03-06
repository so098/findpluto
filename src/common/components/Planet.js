import React, { useRef } from "react";

import { OrbitControls } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Planet({ image, refNone }) {
  const planetAnimation = useRef();
  const animationNone = useRef();
  const texture = useLoader(THREE.TextureLoader, image);

  useFrame(() => {
    if (!refNone) {
      planetAnimation.current.rotation.x += 0.0004;
      planetAnimation.current.rotation.y += 0.0035;
    }
  });
  // autoRotate={false} enableZoom={false}
  return (
    <mesh ref={refNone ? animationNone : planetAnimation}>
      <OrbitControls />
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Planet;
