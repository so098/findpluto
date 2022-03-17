import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LodingPage = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 10);

    if (timer === 0) {
      clearInterval(interval);
      navigate("/findJohn");
    }

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Loding>
      <div>
        <p>
          명왕성으로 출발합니다..
          <br />
          남은 시간까지 {timer}초
        </p>
      </div>
    </Loding>
  );
};

const Loding = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 20px;
  text-align: center;
  line-height: 1.5;

  color: ${(props) => props.theme.color.titleColor};
  background: #000;
  z-index: 4;
`;

export default LodingPage;
