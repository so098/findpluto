import React, { useEffect, useRef, useState } from "react";

import { useGLTF } from "@react-three/drei";

import clueStore from "../../module/clueStore";

const Flag = ({ ...props }) => {
  const group = useRef();
  const { nodes } = useGLTF("/flagPole/scene.gltf");
  const symbols = clueStore((state) => state.symbols);
  const johnPosition = clueStore((state) => state.johnPosition);
  const [flagPosition, setFlagPosition] = useState([]);

  useEffect(() => {
    if (johnPosition) {
      if (symbols.includes("flag")) {
        johnPosition[1] -= 20;
        setFlagPosition(johnPosition);
      }
    }
  }, [johnPosition]);

  return (
    <group ref={group} {...props} dispose={null} position={flagPosition}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={1.56}>
            <mesh
              geometry={nodes.polySurface1105_lambert3_0.geometry}
              material={nodes.polySurface1105_lambert3_0.material}
            />
          </group>
          <group position={[0, 0.17, 0]}>
            <mesh
              geometry={nodes.pTorus1_lambert3_0.geometry}
              material={nodes.pTorus1_lambert3_0.material}
            />
          </group>
          <group position={[0, -2.97, 0]}>
            <group position={[0, 34.95, 0]}>
              <primitive object={nodes._rootJoint} />
              <skinnedMesh
                geometry={nodes.Flag_lambert3_0.geometry}
                material={nodes.Flag_lambert3_0.material}
                skeleton={nodes.Flag_lambert3_0.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Flag;

useGLTF.preload("/flagPole/scene.gltf");
