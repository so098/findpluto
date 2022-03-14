import React, { useRef } from "react";

import { OrbitControls } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import PropTypes from "prop-types";
import * as THREE from "three";

const Planet = ({ image, animationNone }) => {
  const planetAnimation = useRef();
  const animationNoneRef = useRef();
  const texture = useLoader(THREE.TextureLoader, image);

  useFrame(() => {
    if (!animationNone) {
      planetAnimation.current.rotation.x += 0.0004;
      planetAnimation.current.rotation.y += 0.0035;
    }
  });

  return (
    <>
      <mesh
        ref={animationNone ? animationNoneRef : planetAnimation}
        enableZoom={false}
      >
        <OrbitControls />
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};

Planet.propTypes = {
  image: PropTypes.string,
  animationNone: PropTypes.string,
};

export default Planet;
