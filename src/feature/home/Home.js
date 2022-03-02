import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { useBeforeunload } from "react-beforeunload";

import SpaceBackground from "../../common/components/SpaceBackground";
import Title from "./Title";

function Home() {
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
          <SpaceBackground image="/assets/earth.png" />
        </Suspense>
      </Canvas>
      <Title />
    </>
  );
}

export default Home;
