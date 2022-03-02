import React, { useRef } from "react";

import { OrbitControls } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Planet({ image, refNone }) {
  const planetAnimation = useRef();
  const animationNone = useRef();
  const texture = useLoader(THREE.TextureLoader, image || "/assets/earth.png");

  useFrame(() => {
    if (!refNone) {
      planetAnimation.current.rotation.x += 0.0025;
      planetAnimation.current.rotation.y += 0.0005;
    }
  });

  return (
    <mesh ref={refNone ? animationNone : planetAnimation}>
      <OrbitControls autoRotate={false} enableZoom={false} />
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Planet;
