import React, { useEffect, useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

import createKey from "../../common/utils/createKey";
import tutorialMessages from "./resource/tutorialMessages";

function ContactMessage({ setScriptCount }) {
  const [count, setCount] = useState(0);
  const tutorialScript = tutorialMessages();

  const handleOnClick = () => {
    if (count === tutorialScript.length - 1) {
      return;
    }
    setCount(count + 1);
  };

  useEffect(() => {
    setScriptCount(count);
  }, [count]);

  return (
    <>
      <Notice key={createKey()} speaker={tutorialScript[count].speaker}>
        {tutorialScript[count].type}
      </Notice>
      <MessageWrapper speaker={tutorialScript[count].speaker}>
        <p key={createKey()}>{tutorialScript[count].text}</p>
        <ArrowWrapper onClick={handleOnClick}>
          <IoMdArrowDropdown />
        </ArrowWrapper>
      </MessageWrapper>
    </>
  );
}
const Notice = styled.span`
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 500;
  background: #080808;
  ${({ speaker }) => {
    return speaker === "me"
      ? `
      color: #0fd1c9;
      `
      : `
      color: #c213fd;
      `;
  }};
  z-index: 2;
`;

const MessageWrapper = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  width: 900px;
  padding: 5px 10px;
  padding: 30px 20px;
  box-sizing: border-box;
  background: #141414e0;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  ${({ speaker }) => {
    return speaker === "me"
      ? `
      border: 1px solid #0fd1c9;
      color: #0fd1c9;
      `
      : `
      border: 1px solid #c213fd;
      color: #c213fd;
      `;
  }};
  z-index: 2;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 20px;
  cursor: pointer;

  svg {
    width: 20px;
  }
`;

export default ContactMessage;
