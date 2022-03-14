import React, { useState } from "react";

import { Box } from "@react-three/drei";
import PropTypes from "prop-types";

import speedStore from "../../module/speedStore";

const BonusBox = ({ position }) => {
  const speed = speedStore((state) => state.speed);
  const setSpeed = speedStore((state) => state.setSpeed);
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

BonusBox.propTypes = {
  position: PropTypes.array,
};

export default BonusBox;
