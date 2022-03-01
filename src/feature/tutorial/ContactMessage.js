import React, { useEffect, useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

import createKey from "../../common/utils/createKey";
import clueStore from "../../module/clueStore";
import chooseConversation from "./resource/chooseConversation";
import speakJohnConversation from "./resource/speakJohnConversation";
import tutorialMessages from "./resource/tutorialMessages";

function ContactMessage({ setScriptCount }) {
  const [count, setCount] = useState(0);
  const [speakStart, setSpeakStart] = useState(0);
  const [isJohnSays, setJohnSays] = useState(false);
  // const [test, setIsTest] = useState();
  const tutorialScript = tutorialMessages();
  const choiceConversation = chooseConversation();
  const johnSayConversation = speakJohnConversation();
  const setClue = clueStore((state) => state.setClue);
  const clues = clueStore((state) => state.clues);
  const handleOnClick = () => {
    if (count === tutorialScript.length - 1) {
      return;
    }
    setCount(count + 1);
  };

  const handleChoiceMessage = (e, clue) => {
    if (!e.target.id) {
      setClue(clue);

      return;
    }

    setJohnSays((isOpen) => !isOpen);
    setSpeakStart(Number(e.target.id));
  };

  useEffect(() => {
    setScriptCount(count);
  }, [count]);

  return (
    <>
      <ChoiceMessages>
        <p>{clues}</p>
        {!isJohnSays ? (
          choiceConversation[speakStart].answers.map((answer) => {
            return (
              <div key={createKey()}>
                <span>{answer.type}</span>
                <div
                  className="choiceMessage user"
                  id={answer.to}
                  onClick={handleChoiceMessage}
                >
                  {answer.content}
                </div>
              </div>
            );
          })
        ) : (
          <>
            <span>{johnSayConversation[speakStart].type}</span>
            <div
              className="choiceMessage john"
              key={createKey()}
              id={johnSayConversation[speakStart].to}
              onClick={(e) => {
                handleChoiceMessage(e, johnSayConversation[speakStart].clue);
              }}
            >
              {johnSayConversation[speakStart].content}
            </div>
          </>
        )}
      </ChoiceMessages>
      <Notice speaker={tutorialScript[count].speaker}>
        {tutorialScript[count].type}
      </Notice>
      <MessageWrapper speaker={tutorialScript[count].speaker}>
        <p>{tutorialScript[count].text}</p>
        <ArrowWrapper onClick={handleOnClick}>
          <IoMdArrowDropdown />
        </ArrowWrapper>
      </MessageWrapper>
    </>
  );
}

const Notice = styled.span`
  position: absolute;
  top: 8%;
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

const ChoiceMessages = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;

  z-index: 3;

  .choiceMessage {
    width: 900px;
    margin: 34px;
    padding: 28px 38px;
    box-sizing: border-box;
    background: #141414e0;
    cursor: pointer;
  }

  .user {
    border: 1px solid ${(props) => props.theme.color.titleColor};
    color: ${(props) => props.theme.color.titleColor};
  }

  .john {
    border: 1px solid ${(props) => props.theme.color.titlePurpleColor};
    color: ${(props) => props.theme.color.titlePurpleColor};
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 20px;
  cursor: pointer;

  svg {
    path {
      color: #fff;
    }
  }
`;

export default ContactMessage;
