import React, { useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

import createKey from "../../utils/createKey";
import messages from "./resource/tutorialMessages";

function ContactMessage() {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    if (count === messages.length - 1) {
      return;
    }

    setCount(count + 1);
  };

  return (
    <>
      <Notice key={createKey()}>{messages[count].type}</Notice>
      <MessageWrapper>
        <p key={createKey()}>{messages[count].text}</p>
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
  color: ${(props) => props.theme.color.titleColor};
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
  border: 1px solid #0fd1c9;
  padding: 30px 20px;
  box-sizing: border-box;
  background: #141414e0;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  color: #0fd1c9;
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
