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
import itemStore from "../../module/itemStore";
import Player from "./Player";
import clueLocations from "./resource/clueLocations.json";

const InsidePluto = () => {
  const INITTIME = 25;
  const navigator = useNavigate();
  const clueIndex = clueStore((state) => state.clueIndex);
  const [position, setPosition] = useState([]);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [isFailModal, setIsFailModal] = useState(false);
  const [isStartModal, setIsStartModal] = useState(true);
  const setTime = itemStore((state) => state.setTime);
  const time = itemStore((state) => state.time);
  const speed = itemStore((state) => state.speed);
  const setSpeed = itemStore((state) => state.setSpeed);

  useEffect(() => {
    if (!isStartModal && !isSuccessModal) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      if (time === 0) {
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
    setTime(INITTIME);
  };

  const closeFailModal = () => {
    navigator("/");
    setSpeed(30);
    setTime(INITTIME);
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
            {time < 10 ? "0" + time : time}
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
          check="??????"
          header="???????????? ?????? ?????? ?????? ???????????????"
        >
          <p>???????????? {INITTIME}??? ?????? ?????? ????????? ??????, ????????? ??????????????? </p>
          <p>?????? ????????? ????????? ?????? ???????????? ??????????????????. </p>
          <p>????????? ???????????? ???????????? ???????????????</p>
          <p>????????? ????????? ???????????? ????????? ???????????????</p>
          <p>(?????? ??? ???????????? ????????? ??????!)</p>
          <p> ???????????? ????????? ???????????? ??????????????? ????????? ??? ????????????.</p>
          <p>
            ????????? ?????????[
            <IoMdArrowDropup />
            (???) ,<IoMdArrowDropdown />
            (???),
            <IoMdArrowDropright />
            (?????????),
            <IoMdArrowDropleft />
            (??????), w(???), s(??????)]
          </p>
        </Modal>
      )}
      {isSuccessModal && (
        <Modal
          open={isSuccessModal}
          close={closeSuccessModal}
          check="???????????? ????????????"
          header="???????????? ????????? ???????????? esc??? ???????????????"
          styleNone
        >
          <p>?????? ????????? ?????? ?????? : {INITTIME - time}???</p>
          <img src="/assets/successDescription.png" />
        </Modal>
      )}
      {isFailModal && (
        <Modal
          open={isFailModal}
          close={closeFailModal}
          check="???????????? ????????????"
          header="???????????? ????????? ???????????? esc??? ???????????????"
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
