import React, { useEffect, useRef, useState } from "react";

import { useGLTF } from "@react-three/drei";

import clueStore from "../../module/clueStore";
import johnLocations from "./resource/johnLocations.json";

const SpaceSuit = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/spaceSuit/scene.gltf");
  const symbols = clueStore((state) => state.symbols);
  const [locationNames, setLocationNames] = useState([]);
  const [locations, setLocations] = useState([]);
  const [intersection, setIntersection] = useState([]);
  const [position, setPosition] = useState([]);
  const setJohnPosition = clueStore((state) => state.setJohnPosition);

  useEffect(() => {
    johnLocations.forEach((johnLocation) => {
      if (symbols.includes(johnLocation.name) && johnLocation.positions) {
        johnLocation.positions.forEach((positions) => {
          setLocationNames((prev) => [...prev, johnLocation.name]);
          setLocations((prev) => [...prev, positions]);
        });
      }
    });
  }, []);

  useEffect(() => {
    const duplicationValues = [];
    const locationNameArray = [...new Set(locationNames)];

    for (let i = 0; i < locations.length; i++) {
      const result = [];
      const tempId = locations[i].id;
      for (let j = i; j < locations.length; j++) {
        if (tempId === locations[j].id) {
          result.push(locations[j].id);
        }
        if (result.length > 1) {
          duplicationValues.push(...result);
        }
      }
    }

    const deletedDuplicationValues = [...new Set(duplicationValues)];

    locations.forEach((location) => {
      if (locationNameArray.length > 1) {
        if (deletedDuplicationValues.includes(location.id)) {
          setIntersection((prev) => [...prev, location]);
          deletedDuplicationValues.splice(
            deletedDuplicationValues.indexOf(location.id),
            1
          );
        }
      } else {
        setIntersection((prev) => [...prev, location]);
      }
    });
  }, [locations]);

  useEffect(() => {
    if (intersection) {
      const positions = [];
      intersection.forEach(({ position }) => {
        positions.push(position);
      });

      const positionPick = Math.floor(Math.random() * positions.length);
      setPosition(positions[positionPick]);
      setJohnPosition(positions[positionPick]);
    }
  }, [intersection]);

  return (
    <group ref={group} {...props} dispose={null} position={position}>
      <group rotation={[-Math.PI / 2.1, 1.3, 2]}>
        <group rotation={[2, 0.6, 0.3]}>
          <mesh
            geometry={nodes.mesh_0.geometry}
            material={materials.astronauta_v2_Material_u1_v1}
          />
        </group>
      </group>
    </group>
  );
};

export default SpaceSuit;

useGLTF.preload("/spaceSuit/scene.gltf");
