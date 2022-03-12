import React, { Suspense, useEffect, useState } from "react";

import { Physics } from "@react-three/cannon";
import { PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Modal from "../../common/components/Modal";
import SpaceBackground from "../../common/components/SpaceBackground";
import clueStore from "../../module/clueStore";
import Player from "./Player";
import clueLocations from "./resource/clueLocations.json";

function InsidePluto() {
  const navigator = useNavigate();
  const clueIndex = clueStore((state) => state.clueIndex);
  const [position, setPosition] = useState([]);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [isFailModal, setIsFailModal] = useState(false);
  const [isStartModal, setIsStartModal] = useState(true);
  const [count, setCount] = useState(10);
  const [speedNumber, setSpeedNumber] = useState(0);
  useEffect(() => {
    if (!isStartModal && !isSuccessModal) {
      const interval = setInterval(() => {
        setCount(count - 1);
      }, 10000);

      if (count === 0) {
        clearInterval(interval);
        setIsFailModal(true);
        setIsSuccessModal(false);
      }
      return () => {
        clearInterval(interval);
      };
    }
  });

  const closeStartModal = () => {
    setIsStartModal(false);
  };

  const closeSuceessModal = () => {
    navigator("/");
  };

  const closeFailModal = () => {
    navigator("/");
  };

  useEffect(() => {
    clueLocations.forEach((clueLocation) => {
      if (JSON.stringify(clueLocation.emit) === JSON.stringify(clueIndex)) {
        setPosition(clueLocation.to);
      }
    });
  }, []);

  return (
    <>
      <Canvas pixelRatio={window.devicePixelRatio}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <fog attach="fog" color="#eae1d5" near={0} far={300} />
          <SpaceBackground castShadow />
          <spotLight
            intensity={5}
            position={[5, 5, 5]}
            angle={Math.PI / 2}
            castShadow
          />
          <Physics gravity={[0, -30, 0]}>
            {!isStartModal && !isFailModal && !isSuccessModal && (
              <>
                <PointerLockControls />
              </>
            )}
            <Player
              position={position}
              setIsSuccessModal={setIsSuccessModal}
              setSpeedNumber={setSpeedNumber}
            />
          </Physics>
        </Suspense>
      </Canvas>
      <CountWrapper>
        {count}남았습니다. speed: {speedNumber}
      </CountWrapper>
      {isStartModal && (
        <Modal
          open={isStartModal}
          close={closeStartModal}
          check="확인"
          header="제한시간 안에 존을 찾아 클릭하세요"
        >
          제한시간 20초 안에 존을 찾으면 성공, 아니면 실패입니다
          <br /> 존을 찾으면 가까이 가서 클릭해주세요
        </Modal>
      )}
      {isSuccessModal && (
        <Modal
          open={isSuccessModal}
          close={closeSuceessModal}
          check="처음으로 돌아가기"
          header="마우스가 보이지 않는다면 esc를 눌러주세요"
          styleNone
        >
          <p>존을 찾는데 걸린 시간 : {count}초</p>
          <img src="/assets/successDescription.png" />
        </Modal>
      )}
      {isFailModal && (
        <Modal
          open={isFailModal}
          close={closeFailModal}
          check="처음으로 돌아가기"
          header="마우스가 보이지 않는다면 esc를 눌러주세요"
          styleNone
          styled={styled}
        >
          <img src="/assets/failDescription.png" />
        </Modal>
      )}
    </>
  );
}

const CountWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
`;
export default InsidePluto;
