import React from "react";

import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
function Planet() {
  const texture = useLoader(THREE.TextureLoader, "/assets/earth.png");

  return (
    <mesh>
      <OrbitControls />
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Planet;
