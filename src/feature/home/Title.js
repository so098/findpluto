import React, { useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import userNameStore from "../../module/userNameStore";

const Title = () => {
  const nameInput = useRef();
  const navigate = useNavigate();
  const setUserName = userNameStore((state) => state.setUserName);

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  const handleSubmit = () => {
    setUserName(nameInput.current.value);
    navigate("/tutorial");
  };

  return (
    <Section data-testid="input">
      <TitleBox>
        <span>Find Pluto</span>
        <h1>명왕성을 찾아라</h1>
      </TitleBox>
      <Form onSubmit={handleSubmit}>
        <h2>Your name is...</h2>
        <div>
          <label>우주 비행사</label>
          <input type="text" name="name" placeholder="에리스" ref={nameInput} />
          <input type="submit" value="비행준비완료" />
        </div>
      </Form>
    </Section>
  );
};

const Section = styled.section`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
`;

const TitleBox = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-family: ${(props) => props.theme.font.titleFont};

  span {
    font-size: 15px;
    color: #0fd1c9;
  }

  h1 {
    width: 400px;
    margin: 15px auto;
    border-bottom: 1px solid #0fd1c92b;
    padding-bottom: 15px;
    text-shadow: -1px 0 20px #0fd1c9b5, 0 1px #0fd1c9, 1px 0 #0fd1c9,
      0 -1px #0fd1c9;
    font-size: 40px;
  }
`;

const Form = styled.form`
  text-align: center;
  font-family: ${(props) => props.theme.font.titleFont};

  h2 {
    margin-bottom: 10px;
    color: #fff;
  }

  label {
    padding: 10px;
    box-sizing: border-box;
    color: ${(props) => props.theme.color.titleColor};
  }

  input {
  }

  input[type="text"] {
    width: 50%;
    padding: 7px;
    background: #eeeeee1c;
    font-size: 16px;
  }

  input[type="submit"] {
    display: inline-block;
    width: 300px;
    margin: 50px;
    border: 1px solid ${(props) => props.theme.color.blackTitleColor};
    padding: 7px;
    background: #eeeeee1c;
    font-size: 16px;
    font-family: ${(props) => props.theme.font.titleFont};
    color: ${(props) => props.theme.color.titleColor};
  }

  div {
    margin-top: 20px;
  }
`;

export default Title;
