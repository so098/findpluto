import React, { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

import SpaceBackground from "../../common/components/SpaceBackground";
import SpaceCraft from "../../common/components/SpaceCraft";
import DescriptionModal from "../findJohn/DescriptionModal";
function FindJohn() {
  const [modalOpen, setModalOpen] = useState(true);

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
            <spotLight position={[50, 15, 10]} angle={0.3} />
            <SpaceBackground />
          </Suspense>
        </Canvas>
      </CanvasWrapper>
      <SpaceCraft speaker="me" />
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

export default FindJohn;
