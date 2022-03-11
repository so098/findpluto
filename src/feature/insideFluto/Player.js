import React, { useEffect, useRef } from "react";

import { useSphere } from "@react-three/cannon";
import { FlyControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

import { useKeyboardControls } from "../../common/hooks/useKeyboardControls";

function Player(props) {
  const chassisBody = useRef(null);
  const SPEED = 6;
  const { camera } = useThree();
  const { moveForward, moveBackward, moveLeft, moveRight } =
    useKeyboardControls();
  const [, api] = useSphere(
    () => ({
      mass: 1,
      type: "Dynamic",
      ...props,
    }),
    chassisBody
  );

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
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    );
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);
  });
  return (
    <>
      <FlyControls />
      <mesh ref={chassisBody} />
    </>
  );
}

export default Player;
