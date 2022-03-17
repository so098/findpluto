import React, { useState } from "react";

import { useLoader } from "@react-three/fiber";
import PropTypes from "prop-types";
import * as THREE from "three";

import itemStore from "../../module/itemStore";

const IncreaseTimeBox = ({ position }) => {
  const time = itemStore((state) => state.time);
  const setTime = itemStore((state) => state.setTime);
  const [visible, setVisible] = useState(true);
  const texture = useLoader(THREE.TextureLoader, "/assets/increaseBox.png");
  return (
    <mesh
      onClick={() => {
        setVisible(false);
        setTime(time + 5);
      }}
      position={position}
      visible={visible}
    >
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

IncreaseTimeBox.propTypes = {
  position: PropTypes.array,
};

export default IncreaseTimeBox;
