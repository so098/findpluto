import React, { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

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
              position={[20, 20, 20]}
              shadow-bias={-0.00005}
              angle={Math.PI / 6}
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              castShadow
            />
            <SpaceBackground image="/assets/pluto.jpg" refNone="refNone" />
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
  position: relative;
  width: 100%;
  height: 100%;

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
