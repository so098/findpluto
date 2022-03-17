import React, { useEffect, useRef } from "react";

import { useSphere } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";
import PropTypes from "prop-types";
import { Vector3 } from "three";

import { useKeyboardControls } from "../../common/hooks/useKeyboardControls";
import itemStore from "../../module/itemStore";
import Flag from "./Flag";
import IncreaseSpeedBox from "./IncreaseSpeedBox";
import IncreaseTimeBox from "./IncreaseTimeBox";
import PlutoPlace from "./PlutoPlace";
import SpaceSuit from "./SpaceSuit";

const Player = ({ position, setIsSuccessModal }) => {
  const speed = itemStore((state) => state.speed);
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
        <IncreaseSpeedBox position={[0, 10, 10]} />
        <IncreaseSpeedBox position={[-400, 60, 200]} />
        <IncreaseSpeedBox position={[200, -10, 40]} />
        <IncreaseSpeedBox position={[500, 0, 70]} />
        <IncreaseSpeedBox position={[700, 0, 10]} />
        <IncreaseSpeedBox position={[800, -20, 0]} />
        <IncreaseSpeedBox position={[-50, -20, 300]} />
        <IncreaseSpeedBox position={[-70, -20, 700]} />
        <IncreaseSpeedBox position={[-100, -20, 100]} />
        <IncreaseSpeedBox position={[-900, 100, 400]} />
        <IncreaseSpeedBox position={[-800, 200, 0]} />
        <IncreaseSpeedBox position={[-800, 200, -200]} />
        <IncreaseSpeedBox position={[-600, 200, -600]} />
        <IncreaseTimeBox position={[0, 20, -60]} />
        <IncreaseTimeBox position={[900, 20, 350]} />
        <IncreaseTimeBox position={[400, 10, -10]} />
        <IncreaseTimeBox position={[200, 10, 200]} />
        <IncreaseTimeBox position={[-300, 10, 200]} />
        <IncreaseTimeBox position={[50, 10, 400]} />
        <IncreaseTimeBox position={[-200, 10, -100]} />
        <IncreaseTimeBox position={[-300, 80, -100]} />
        <IncreaseTimeBox position={[-480, 80, -400]} />
        <IncreaseTimeBox position={[-80, 80, -900]} />
        <IncreaseTimeBox position={[-180, 80, -900]} />
        <IncreaseTimeBox position={[-700, 100, -900]} />
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
