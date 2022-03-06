import React, { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

import Planet from "../../common/components/Planet";
import SpaceBackground from "../../common/components/SpaceBackground";
import SpaceCraft from "../../common/components/SpaceCraft";
import createKey from "../../common/utils/createKey";
import clueStore from "../../module/clueStore";
import DescriptionModal from "../findJohn/DescriptionModal";

function FindJohn() {
  const [modalOpen, setModalOpen] = useState(true);
  const clues = clueStore((state) => state.clues);
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CanvasWrapper>
        <Canvas
          pixelRatio={window.devicePixelRatio}
          camera={{
            position: [5, 5, 5],
            fov: 75,
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight
              intensity={5}
              position={[10, 10, 20]}
              angle={Math.PI / 2}
              castShadow
            />
            <SpaceBackground />
            <mesh position={[1.9, 1.5, 1]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>
            <mesh position={[2.2, 1, 1]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>
            <mesh position={[2, 1.1, 1.3]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>

            <mesh position={[-1, 2, 1.4]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="red" />
            </mesh>
            <mesh position={[-1.5, 1.7, 1.4]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="red" />
            </mesh>
            <mesh position={[-1.5, 2, 0.9]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="red" />
            </mesh>
            <mesh position={[-2.4, 0.5, -1]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="orange" />
            </mesh>
            <mesh position={[-2.3, 1.2, 0.2]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="orange" />
            </mesh>
            <mesh position={[-2.5, 0.7, -0.5]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="orange" />
            </mesh>
            <mesh position={[-2.6, 0.4, 0.3]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="orange" />
            </mesh>
            <mesh position={[-1.4, -2.2, 0.2]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="orange" />
            </mesh>
            <mesh position={[1.4, 2, -1]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>
            <mesh position={[1.8, 1.9, -0.2]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>
            <mesh position={[1.9, 1.7, -0.5]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>
            <mesh position={[1.6, 1.9, -0.8]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>
            <mesh position={[2.5, 0.4, 0.6]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>
            <mesh position={[2.5, 0.1, 0.6]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>
            <mesh position={[2.6, 0.1, 0.1]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>
            <mesh position={[2.3, 0.7, 1]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>
            <mesh position={[2.1, 0.7, 1.4]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>

            <mesh position={[1.7, 2, -0.025]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="green" />
            </mesh>
            {/* 여기부터 빛의 뒷편 */}
            <mesh position={[1.6, 1, -1.9]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="#007671" />
            </mesh>

            <mesh position={[1.6, 0.7, -2]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="#007671" />
            </mesh>
            <mesh position={[1.9, 0.1, -1.9]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="#007671" />
            </mesh>
            <mesh position={[1.2, 0, -2.4]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="#007671" />
            </mesh>
            <mesh position={[2.2, -0.3, -1.4]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="#007671" />
            </mesh>
            <mesh position={[1.5, 0.4, -2.1]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="#007671" />
            </mesh>
            <mesh position={[0.3, -0.2, -2.6]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="#007671" />
            </mesh>
            <mesh position={[0.1, -0.5, -2.6]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="#007671" />
            </mesh>
            <mesh position={[0.5, -0.6, -2.5]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="#007671" />
            </mesh>
            <mesh position={[0.1, -1, -2.4]}>
              <sphereGeometry args={[0.1, 50, 0.1]} />
              <meshPhongMaterial color="#007671" />
            </mesh>
            <Planet image="/assets/pluto.jpg" refNone="refNone" />
          </Suspense>
        </Canvas>
      </CanvasWrapper>
      <SpaceCraft speaker="me" />
      <ClueWrapper>
        <h3>존에게 얻은 단서</h3>
        <ul>
          {clues.map((clue) => {
            return <li key={createKey()}>{clue}</li>;
          })}
        </ul>
        {clues.length === 0 && <p>단서 없음</p>}
      </ClueWrapper>
      <DescriptionModal modalOpen={modalOpen} closeModal={closeModal} />
    </>
  );
}

const CanvasWrapper = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 9;
`;

const ClueWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  border: 1px solid ${(props) => props.theme.color.titleColor};
  padding: 20px 20px;
  background-color: #141414e0;
  color: #fff;
  z-index: 10;

  h3 {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${(props) => props.theme.color.titleColor};
    font-weight: bold;
    font-size: 18px;
  }
  li {
    padding: 10px 0;
    font-size: 18px;
  }
`;
export default FindJohn;
