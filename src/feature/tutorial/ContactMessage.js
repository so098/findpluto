import React, { useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

import createKey from "../../common/utils/createKey";
import clueStore from "../../module/clueStore";
import chooseConversation from "./resource/chooseConversation";
import speakJohnConversation from "./resource/speakJohnConversation";
import tutorialMessages from "./resource/tutorialMessages";

function ContactMessage({ setSpeaker }) {
  const [count, setCount] = useState(0);
  const [speakStart, setSpeakStart] = useState(0);
  const [isJohnSays, setIsJohnSays] = useState(false);
  const [isChoiceStart, setIsChoiceStart] = useState(false);
  const tutorialScript = tutorialMessages();
  const choiceConversation = chooseConversation();
  const johnSayConversation = speakJohnConversation();
  const setClue = clueStore((state) => state.setClue);
  const clues = clueStore((state) => state.clues);

  const handleOnClick = (speaker) => {
    if (count === tutorialScript.length - 1) {
      setIsChoiceStart(true);
      return;
    }
    setCount(count + 1);
    setSpeaker(speaker);
  };

  const handleChoiceMessage = (e, clue, speaker) => {
    if (!e.target.id) {
      setClue(clue);

      return;
    }

    setIsJohnSays((isJohnSays) => !isJohnSays);
    setSpeakStart(Number(e.target.id));
    setSpeaker(speaker);
  };

  return (
    <>
      <ChoiceMessages>
        <p>{clues}</p>
        {isChoiceStart &&
          !isJohnSays &&
          choiceConversation[speakStart].answers.map((answer) => {
            return (
              <section key={createKey()}>
                <Notice top="-170" speaker="john">
                  {answer.type}
                </Notice>
                <div
                  className="choiceMessage me"
                  id={answer.to}
                  onClick={(e) => {
                    handleChoiceMessage(e, "", "john");
                  }}
                >
                  {answer.content}
                  {answer.clues && (
                    <span>단서 {answer.clues.length}개 획득</span>
                  )}
                  <ul>
                    {answer.clues &&
                      answer.clues.map((clue, index) => {
                        return (
                          <li key={createKey()}>
                            {index + 1}. {clue}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </section>
            );
          })}
        {isChoiceStart && isJohnSays && (
          <section>
            <Notice top="-170" speaker="me">
              {johnSayConversation[speakStart].type}
            </Notice>
            <div
              className="choiceMessage john"
              key={createKey()}
              id={johnSayConversation[speakStart].to}
              onClick={(e) => {
                handleChoiceMessage(
                  e,
                  johnSayConversation[speakStart].clue,
                  "me"
                );
              }}
            >
              {johnSayConversation[speakStart].content}
            </div>
          </section>
        )}
      </ChoiceMessages>
      {!isChoiceStart && (
        <>
          <Notice top="122" speaker={tutorialScript[count].speaker}>
            {tutorialScript[count].type}
          </Notice>
          <MessageWrapper speaker={tutorialScript[count].speaker}>
            <p>{tutorialScript[count].text}</p>
            <ArrowWrapper
              onClick={() => {
                handleOnClick(tutorialScript[count].speaker);
              }}
            >
              <IoMdArrowDropdown />
            </ArrowWrapper>
          </MessageWrapper>
        </>
      )}
    </>
  );
}

const Notice = styled.span`
  position: absolute;
  top: ${(props) => props.top}px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 500;
  background: #080808;

  ${({ speaker }) => {
    return speaker === "john"
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
    return speaker === "john"
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

  .me {
    border: 1px solid ${(props) => props.theme.color.titleColor};
    color: ${(props) => props.theme.color.titleColor};
  }

  .john {
    display: flex;
    align-items: center;
    height: 200px;
    border: 1px solid ${(props) => props.theme.color.titlePurpleColor};
    color: ${(props) => props.theme.color.titlePurpleColor};
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 20px;
  cursor: pointer;
`;

export default ContactMessage;
