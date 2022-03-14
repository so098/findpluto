/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Salvatore Orlando (https://sketchfab.com/sorlando)
license: SKETCHFAB Editorial (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/a-stellar-nursery-in-the-interstellar-space-dd8581835a0c4614b37cd508546daae3
title: A stellar nursery in the interstellar space
*/

import React, { useRef } from "react";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const SpaceStar = ({ ...props }) => {
  const backgroundAnimation = useRef();

  useFrame(() => {
    backgroundAnimation.current.rotation.y += 0.0015;
  });

  const group = useRef();
  const { nodes, materials } = useGLTF("/spaceStar/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, 0, 0]}
        rotation={[0.1, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
        ref={backgroundAnimation}
      >
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.material_13}
          material-color="#47166a"
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.material_12}
          material-color="#4aa28a"
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.material_11}
          material-color="#130b43"
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.material_10}
          material-color="#837ca5"
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.material_9}
          material-color="#317066"
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.material_8}
          material-color="#e8dcde"
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.material_7}
          material-color="#8500d4"
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.material_6}
          material-color="#1d1616"
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.material_5}
          material-color="#6e00fa"
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.material_4}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.material_3}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials.material_2}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials.material_1}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
};

export default SpaceStar;

useGLTF.preload("/spaceStar/scene.gltf");
