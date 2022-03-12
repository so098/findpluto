import React, { useEffect, useRef, useState } from "react";

import { useSphere } from "@react-three/cannon";
import { Box } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

import Flag from "../../common/components/Flag";
import PlutoPlace from "../../common/components/PlutoPlace";
import SpaceSuit from "../../common/components/SpaceSuit";
import { useKeyboardControls } from "../../common/hooks/useKeyboardControls";

function Player({ position, setIsSuccessModal, setSpeedNumber }) {
  const [visible, setVisible] = useState(true);
  const [speed, setSpeed] = useState(100);
  const { camera } = useThree();
  const { moveForward, moveBackward, moveLeft, moveRight, moveUp, moveDown } =
    useKeyboardControls();

  const handleOnClickSuit = () => {
    setIsSuccessModal(true);
  };

  const [chassisBody, api] = useSphere(() => ({
    mass: 10,
    type: "Dynamic",
    position: [0, 10, 0],
  }));

  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    setSpeedNumber(speed);
  }, [speed]);
  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(chassisBody.current.position);
    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      (moveForward ? 1 : 0) - (moveBackward ? 1 : 0)
    );
    const sideVector = new Vector3(
      (moveRight ? 1 : 0) - (moveLeft ? 1 : 0),
      0,
      0
    );

    const upVector = new Vector3(0, (moveDown ? 1 : 0) - (moveUp ? 1 : 0), 0);
    direction
      .subVectors(frontVector, sideVector)
      .add(upVector)
      .normalize()
      .multiplyScalar(speed)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, direction.y, direction.z);
  });

  return (
    <>
      <mesh ref={chassisBody}>
        <Flag />
        <SpaceSuit onClick={handleOnClickSuit} />
        <Box
          args={[1, 1, 1]}
          position={(10, 30, 10)}
          onClick={() => {
            setVisible(false);
            setSpeed(speed + 50);
          }}
          visible={visible}
        >
          <meshNormalMaterial />
        </Box>
        <Box
          args={[10, 10, 10]}
          position={(40, 40, 10)}
          onClick={() => {
            setVisible(false);
            setSpeed(speed + 100);
          }}
          visible={visible}
        >
          <meshNormalMaterial />
        </Box>
        <PlutoPlace position={position} />
      </mesh>
    </>
  );
}

export default Player;
