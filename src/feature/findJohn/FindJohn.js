import React, { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Planet from "../../common/components/Planet";
import SpaceBackground from "../../common/components/SpaceBackground";
import SpaceCraft from "../../common/components/SpaceCraft";
import createKey from "../../common/utils/createKey";
import clueStore from "../../module/clueStore";
import DescriptionModal from "../findJohn/DescriptionModal";
import cluePositons from "./resource/cluePosition.json";

function FindJohn() {
  const [modalOpen, setModalOpen] = useState(true);
  const [locationNames, setLocationNames] = useState([]);
  const [locations, setLocations] = useState([]);
  const [intersection, setIntersection] = useState([]);
  const clues = clueStore((state) => state.clues);
  const setClueIndex = clueStore((state) => state.setClueIndex);
  const symbols = clueStore((state) => state.symbols);
  const navigate = useNavigate();
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    cluePositons.forEach((location) => {
      if (symbols.includes(location.name) && location.positions) {
        location.positions.forEach((positions) => {
          setLocationNames((prev) => [...prev, location.name]);
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
        if (locations.length > 50) {
          if (tempId !== locations[j].id) {
            result.push(locations[j].id);
          }
        } else {
          if (tempId === locations[j].id) {
            result.push(locations[j].id);
          }
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
        }
      } else {
        setIntersection((prev) => [...prev, location]);
      }
    });
  }, [locations]);

  const handleClickMesh = (position) => {
    setClueIndex(position);
    navigate("/insideFluto");
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
            {intersection.map((location) => {
              return (
                <mesh
                  key={createKey()}
                  position={location.position}
                  onClick={() => handleClickMesh(location.position)}
                >
                  <sphereGeometry args={[0.1, 50, 0.1]} />
                  <meshPhongMaterial color="#007671" />
                </mesh>
              );
            })}
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
      <DescriptionModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        check="확인"
      />
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
