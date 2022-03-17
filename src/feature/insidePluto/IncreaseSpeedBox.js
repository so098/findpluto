import React, { useState } from "react";

import { Box } from "@react-three/drei";
import PropTypes from "prop-types";

import itemStore from "../../module/itemStore";

const IncreaseSpeedBox = ({ position }) => {
  const speed = itemStore((state) => state.speed);
  const setSpeed = itemStore((state) => state.setSpeed);
  const [visible, setVisible] = useState(true);

  return (
    <mesh
      onClick={() => {
        setVisible(false);
        setSpeed(speed + 30);
      }}
      position={position}
      visible={visible}
    >
      <Box args={[5, 5, 5]}>
        <meshNormalMaterial />
      </Box>
    </mesh>
  );
};

IncreaseSpeedBox.propTypes = {
  position: PropTypes.array,
};

export default IncreaseSpeedBox;
