/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Rispat Momit (https://sketchfab.com/rispatmomit)
license: SKETCHFAB Standard (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/mars-landscape-4-4234bf7bcbb243a3a086f0cbcb525acc
title: Mars Landscape 4
*/
import React, { useRef } from "react";

import { Shadow, useGLTF } from "@react-three/drei";

export default function PlutoPlace({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/plutoPlace/scene.gltf");

  return (
    <>
      <group
        ref={group}
        {...props}
        dispose={null}
        scale={[2000, 2000, 2000]}
        rotation={[0.6, -5, -0.5]}
      >
        <group receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]}>
          <Shadow
            color="#00497f"
            opacity={2}
            fog={false}
            scale={[0.2, 0.2, 0.2]}
          />
          <mesh geometry={nodes.Object_2.geometry} material={materials.None} />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/plutoPlace/scene.gltf");
