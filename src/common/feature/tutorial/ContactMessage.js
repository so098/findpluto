import React from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

function ContactMessage() {
  const messages = [
    {
      id: 1,
      type: "당신이 말하고 있습니다..",
      text: "여보세요 존?",
    },
    {
      id: 2,
      type: "존이 당신에게 말하고 있습니다..",
      text: "어, 에리스 무슨일이야?",
    },
    {
      id: 3,
      type: "당신이 말하고 있습니다..",
      text: "명왕성으로 갔다는 연락을 받았어.",
    },
  ];
  return (
    <>
      <MessageWrapper>
        {messages.map((message, index) => {
          return <p key={index}>{message.text}</p>;
        })}
        <ArrowWrapper>
          <IoMdArrowDropdown />
        </ArrowWrapper>
      </MessageWrapper>
    </>
  );
}

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

  svg {
    width: 20px;
  }
`;

export default ContactMessage;
