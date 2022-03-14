import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { useBeforeunload } from "react-beforeunload";

import Planet from "../../common/components/Planet";
import SpaceBackground from "../../common/components/SpaceBackground";
import SpaceStar from "./SpaceStar";
import Title from "./Title";

const Home = () => {
  useBeforeunload((event) => {
    event.preventDefault();
  });

  return (
    <>
      <Canvas
        pixelRatio={window.devicePixelRatio}
        camera={{
          position: [12, 5, 5],
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[50, 15, 10]} angle={0.3} />
          <SpaceBackground />
          <SpaceStar />
          <Planet image="/assets/earth.png" />
        </Suspense>
      </Canvas>
      <Title />
    </>
  );
};

export default Home;
