import React, { useEffect, useRef } from "react";

import { useSphere } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";
import PropTypes from "prop-types";
import { Vector3 } from "three";

import { useKeyboardControls } from "../../common/hooks/useKeyboardControls";
import speedStore from "../../module/speedStore";
import BonusBox from "./BonusBox";
import Flag from "./Flag";
import PlutoPlace from "./PlutoPlace";
import SpaceSuit from "./SpaceSuit";

const Player = ({ position, setIsSuccessModal }) => {
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
        <BonusBox position={[0, 10, 10]} />
        <BonusBox position={[-400, 60, 200]} />
        <BonusBox position={[200, -10, 40]} />
        <BonusBox position={[600, 0, 70]} />
        <BonusBox position={[700, 0, 10]} />
        <BonusBox position={[800, -20, 0]} />
        <BonusBox position={[-50, -20, 300]} />
        <BonusBox position={[-70, -20, 700]} />
        <BonusBox position={[-100, -20, 100]} />
        <BonusBox position={[-800, 100, 900]} />
        <BonusBox position={[-800, 200, 0]} />
        <BonusBox position={[-800, 200, -200]} />
        <BonusBox position={[-600, 200, -600]} />
        <PlutoPlace position={position} />
      </mesh>
    </>
  );
};

Player.propTypes = {
  position: PropTypes.array,
  setIsSuccessModal: PropTypes.func,
};

export default Player;
