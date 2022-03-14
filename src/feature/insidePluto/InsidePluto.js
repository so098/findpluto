import React, { Suspense, useEffect, useState } from "react";

import { Physics } from "@react-three/cannon";
import { PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  IoMdArrowDropup,
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdArrowDropleft,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Modal from "../../common/components/Modal";
import SpaceBackground from "../../common/components/SpaceBackground";
import clueStore from "../../module/clueStore";
import speedStore from "../../module/speedStore";
import Player from "./Player";
import clueLocations from "./resource/clueLocations.json";

const InsidePluto = () => {
  const INITCOUNT = 25;
  const navigator = useNavigate();
  const clueIndex = clueStore((state) => state.clueIndex);
  const [position, setPosition] = useState([]);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [isFailModal, setIsFailModal] = useState(false);
  const [isStartModal, setIsStartModal] = useState(true);
  const [count, setCount] = useState(INITCOUNT);
  const speed = speedStore((state) => state.speed);
  const setSpeed = speedStore((state) => state.setSpeed);

  useEffect(() => {
    if (!isStartModal && !isSuccessModal) {
      const interval = setInterval(() => {
        setCount(count - 1);
      }, 1000);

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

  const closeSuccessModal = () => {
    navigator("/");
    setSpeed(30);
  };

  const closeFailModal = () => {
    navigator("/");
    setSpeed(30);
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
            <Player position={position} setIsSuccessModal={setIsSuccessModal} />
          </Physics>
        </Suspense>
      </Canvas>
      <GaugeContainer>
        <CountWrapper>
          <h2 className="count">
            {count < 10 ? "0" + count : count}
            <span>sec</span>
          </h2>
        </CountWrapper>
        <CountWrapper>
          <h2 className="speed">
            <span>speed</span>
            {speed}
          </h2>
        </CountWrapper>
      </GaugeContainer>
      {isStartModal && (
        <Modal
          open={isStartModal}
          close={closeStartModal}
          check="확인"
          header="제한시간 안에 존을 찾아 클릭하세요"
        >
          <p>제한시간 10초 안에 존을 찾으면 성공, 아니면 실패입니다 </p>
          <p>존을 찾으면 가까이 가서 마우스로 클릭해주세요. </p>
          <p>박스를 클릭하면 스피드가 증가합니다</p>
          <p>(클릭 시 가운데를 맞춰서 클릭!)</p>
          <p> 마우스로 배경을 클릭하면 주변시야를 확보할 수 있습니다.</p>
          <p>
            키보드 움직임[
            <IoMdArrowDropup />
            (앞) ,<IoMdArrowDropdown />
            (뒤),
            <IoMdArrowDropright />
            (오른쪽),
            <IoMdArrowDropleft />
            (왼쪽), w(위), s(아래)]
          </p>
        </Modal>
      )}
      {isSuccessModal && (
        <Modal
          open={isSuccessModal}
          close={closeSuccessModal}
          check="처음으로 돌아가기"
          header="마우스가 보이지 않는다면 esc를 눌러주세요"
          styleNone
        >
          <p>존을 찾는데 걸린 시간 : {INITCOUNT - count}초</p>
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
};

const GaugeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  color: #fff;
`;

const CountWrapper = styled.div`
  span {
    font-size: 18px;
    color: #fff;
  }

  h2 {
    font-size: 100px;
    font-family: ${(props) => props.theme.font.titleFont};
    font-style: italic;
  }

  .count {
    color: ${(props) => props.theme.color.titleColor};
  }

  .speed {
    color: ${(props) => props.theme.color.titlePurpleColor};
  }
`;

export default InsidePluto;
