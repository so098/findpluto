import React, { useState, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

import Naptune from "../../common/components/Naptune";
import SpaceBackground from "../../common/components/SpaceBackground";
import SpaceCraft from "../../common/components/SpaceCraft";
import ContactMessage from "./ContactMessage";
import DescriptionModal from "./DescriptionModal";

function Tutorial() {
  const txt =
    "2090년.. 해왕성에서 혼자 탐사를 하는 도중에 나사에서 연락이 와... 기밀문서를 가지고 명왕성으로 떠난 존을 찾아 지구로 돌아오라는 명령을 받게 되었다....   내가 과연 명왕성을 행성계로 돌려놓겠다고 명왕성으로 떠난 존을 설득할 수 있을까..?";
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);
  const [textStart, setTextStart] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [contactMessageStart, setContactMessageStart] = useState(false);
  const [speaker, setSpeaker] = useState("me");
  const [contactJohn, setContactJohn] = useState("");

  useEffect(() => {
    if (!modalOpen & textStart) {
      const interval = setInterval(() => {
        setText(Text + txt[Count]);
        setCount(Count + 1);
      }, 50);

      if (Count === txt.length) {
        clearInterval(interval);
      }
      return () => {
        clearInterval(interval);
      };
    }
  });

  useEffect(() => {
    if (!textStart && !modalOpen) {
      setTimeout(() => {
        setContactJohn("");
        setContactMessageStart(true);
      }, 2500);
    }

    if (Count === txt.length) {
      setTimeout(() => {
        openModal();
      }, 2000);
    }

    setContactJohn("존에게 연락 중입니다..");
  }, [textStart, modalOpen, Count]);

  const openModal = () => {
    setCount(0);
    setText("");
    setModalOpen(true);
    setTextStart(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTextStart(false);
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
      {!textStart && !modalOpen && <Notice>{contactJohn}</Notice>}
      {contactMessageStart && <ContactMessage setSpeaker={setSpeaker} />}
      <Naptune>
        <SpaceCraft speaker={speaker} />
        <ScriptBox onClick={openModal}>
          <p>{Text}</p>
        </ScriptBox>
      </Naptune>
      <DescriptionModal modalOpen={modalOpen} closeModal={closeModal} />
    </>
  );
}

const Notice = styled.span`
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 500;
  background: #080808;
  color: ${(props) => props.theme.color.titleColor};
  z-index: 2;
`;

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
  cursor: pointer;
`;

export default Tutorial;
