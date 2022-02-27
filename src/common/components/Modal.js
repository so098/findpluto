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
              close
            </button>
          </footer>
        </section>
      ) : null}
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${(props) => props.theme.color.titleColor};

  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .openModal {
    display: flex;
    align-items: center;
  }
  section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    overflow: hidden;

    main {
      border: 1px solid #eee;
      padding: 20px;
      box-sizing: border-box;
      background: #1414148a;
      line-height: 1.5;
      font-size: 16px;
    }
  }

  .modal button {
    outline: none;
    cursor: pointer;
    border: 0;
  }
`;

// const modalShow = keyframes`
//   from {
//     opacity: 0;
//     margin-top: -50px;
//   }
//   to {
//     opacity: 1;
//     margin-top: 0;
//   }
// `;
// const modalBgShow = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

export default Modal;
