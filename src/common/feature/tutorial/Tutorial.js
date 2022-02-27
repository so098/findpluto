import React, { useState, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

import Naptune from "../../components/Naptune";
import SpaceBackground from "../../components/SpaceBackground";
import DescriptionModal from "./DescriptionModal";

function Tutorial() {
  const txt =
    "2090년.. 해왕성에서 혼자 탐사를 하는 도중에 나사에서 연락이 와... 기밀문서를 가지고 명왕성으로 떠난 존을 찾아 지구로 돌아오라는 명령을 받게 되었다....   내가 과연 명왕성을 행성계로 돌려놓겠다고 명왕성으로 떠난 존을 설득할 수 있을까..?";
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]);
      setCount(Count + 1);
    }, 100);
    if (Count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    console.log("닫는 곳");
    setModalOpen(false);
  };

  return (
    <>
      <Canvas
        pixelRatio={window.devicePixelRatio}
        camera={{
          position: [5, 5, 5],
          fov: 75,
        }}
      >
        <SpaceBackground />
      </Canvas>
      <Naptune>
        <div>
          <img src="/assets/spaceCraft.png" onClick={openModal} />
        </div>
        <ScriptBox>
          <p>{Text}</p>
        </ScriptBox>
      </Naptune>
      <DescriptionModal modalOpen={modalOpen} closeModal={closeModal} />
    </>
  );
}

const ScriptBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 60px;
  font-size: 20px;
  text-align: center;
  text-shadow: 1px 1px 5px #000;
  line-height: 1.5;
  color: #fff;
`;

export default Tutorial;
