import React, { useEffect, useRef, useState } from "react";

import { useSphere } from "@react-three/cannon";
import { Box } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

import { useKeyboardControls } from "../../common/hooks/useKeyboardControls";
import speedStore from "../../module/speedStore";
import Flag from "./Flag";
import PlutoPlace from "./PlutoPlace";
import SpaceSuit from "./SpaceSuit";

function BoxWrapper({ position }) {
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
}

function Player({ position, setIsSuccessModal }) {
  const speed = speedStore((state) => state.speed);
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
        <BoxWrapper position={[0, 10, 10]} />
        <BoxWrapper position={[-400, 60, 200]} />
        <BoxWrapper position={[200, -10, 40]} />
        <BoxWrapper position={[600, 0, 70]} />
        <BoxWrapper position={[700, 0, 10]} />
        <BoxWrapper position={[800, -20, 0]} />
        <BoxWrapper position={[-50, -20, 300]} />
        <BoxWrapper position={[-70, -20, 700]} />
        <BoxWrapper position={[-100, -20, 100]} />
        <BoxWrapper position={[-800, 100, 900]} />
        <BoxWrapper position={[-800, 200, 0]} />
        <BoxWrapper position={[-800, 200, -200]} />
        <BoxWrapper position={[-600, 200, -600]} />
        <PlutoPlace position={position} />
      </mesh>
    </>
  );
}

export default Player;
