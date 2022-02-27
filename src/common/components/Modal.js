import React from "react";

import styled from "styled-components";

function Modal(props) {
  const { open, close, header } = props;

  return (
    <ModalWrapper className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>{header}</header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={close}>
              확인
            </button>
          </footer>
        </section>
      ) : null}
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.color.titleColor};

  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: #141414c7;
  }

  .openModal {
    display: flex;
    align-items: center;
  }
  section {
    margin: 0 auto;
    border-radius: 0.3rem;
    overflow: hidden;

    header {
      margin-bottom: 10px;
    }

    main {
      border: 1px solid ${(props) => props.theme.color.titleColor};
      width: 600px;
      padding: 30px 0;
      box-sizing: border-box;
      background: #1414148a;
      line-height: 1.5;
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

export default Modal;
