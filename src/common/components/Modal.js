import React from "react";

import styled from "styled-components";

function Modal(props) {
  const { open, close, header, check, styleNone } = props;

  return (
    <ModalWrapper className={open ? "openModal modal" : "modal"}>
      {open ? (
        <>
          <Background />
          <section>
            <header>{header}</header>
            <Main styleNone={styleNone}>{props.children}</Main>
            <footer>
              <button className="close" onClick={close}>
                {check}
              </button>
            </footer>
          </section>
        </>
      ) : null}
    </ModalWrapper>
  );
}

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #0000008c;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ModalWrapper = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.color.titleColor};
  z-index: 99;
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #141414c7;
    transition: all 0.2s;
  }

  .openModal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    border-radius: 0.3rem;
    overflow: hidden;
    z-index: 100;
    header {
      margin-bottom: 10px;
      text-shadow: 1px 1px 1px #000;
    }
  }

  .close {
    margin-top: 10px;
    padding: 8px 70px;
    background: ${(props) => props.theme.color.titleColor};
    font-size: 18px;
    font-weight: 500;
    color: #000;
  }
`;

const Main = styled.main`
  width: 600px;
  padding: 30px 0;
  box-sizing: border-box;

  line-height: 1.5;
  ${({ styleNone }) => {
    return styleNone
      ? null
      : `
      border: 1px solid #0fd1c9;
      background: #141414cf;
      `;
  }};
`;
export default Modal;
