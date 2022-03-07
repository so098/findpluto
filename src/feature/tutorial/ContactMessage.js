import React, { useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

import createKey from "../../common/utils/createKey";
import clueStore from "../../module/clueStore";
import LodingPage from "./LodingPage";
import chooseConversation from "./resource/chooseConversation";
import speakJohnConversation from "./resource/speakJohnConversation";
import tutorialMessages from "./resource/tutorialMessages";

function ContactMessage({ setSpeaker }) {
  const [count, setCount] = useState(0);
  const [speakStart, setSpeakStart] = useState(0);
  const [isJohnSays, setIsJohnSays] = useState(false);
  const [isChoiceStart, setIsChoiceStart] = useState(false);
  const [isLoding, setIsLoding] = useState(false);
  const tutorialScript = tutorialMessages();
  const choiceConversation = chooseConversation();
  const johnSayConversation = speakJohnConversation();
  const setClue = clueStore((state) => state.setClue);
  const setSymbols = clueStore((state) => state.setSymbols);

  const handleOnClick = (speaker) => {
    if (count === tutorialScript.length - 1) {
      setIsChoiceStart(true);
      return;
    }
    setCount(count + 1);
    setSpeaker(speaker);
  };

  const handleChoiceMessage = (e, clue, speaker, symbols) => {
    if (!e.target.id) {
      setClue(clue);
      setSymbols(symbols);
      setIsLoding(true);
      return;
    }

    setIsJohnSays((isJohnSays) => !isJohnSays);
    setSpeakStart(Number(e.target.id));
    setSpeaker(speaker);
  };

  return (
    <>
      {isLoding && <LodingPage />}
      <ChoiceMessages>
        {isChoiceStart &&
          !isJohnSays &&
          choiceConversation[speakStart].answers.map((answer) => {
            return (
              <section key={createKey()}>
                <Notice top="8" speaker="john">
                  {answer.type}
                </Notice>
                <div
                  className="choiceMessage me"
                  id={answer.to}
                  onClick={(e) => {
                    handleChoiceMessage(
                      e,
                      answer.clues,
                      "john",
                      answer.symbols
                    );
                  }}
                >
                  {answer.content}
                  {answer.clues && (
                    <ClueNumberWrapper>
                      단서 {answer.clues.length}개 획득
                    </ClueNumberWrapper>
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
                  {answer.clues && answer.clues.length === 0 && (
                    <p>단서 없음.</p>
                  )}
                </div>
                {answer.clues && (
                  <StartedPluto>
                    단서 클릭시 명왕성으로 출발합니다.
                  </StartedPluto>
                )}
              </section>
            );
          })}
        {isChoiceStart && isJohnSays && (
          <section>
            <Notice top="8" speaker="me">
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
          <Notice top="9" speaker={tutorialScript[count].speaker}>
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
  top: ${(props) => props.top}%;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  border-radius: 20px;
  padding: 0 10px;
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
  z-index: 3;
`;

const ChoiceMessages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const StartedPluto = styled.div`
  text-align: center;
  color: ${(props) => props.theme.color.titleColor};
`;

const ClueNumberWrapper = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.color.titleColor};
`;
export default ContactMessage;
