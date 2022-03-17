import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Modal = ({ open, close, header, check, styleNone, styled, children }) => {
  return (
    <ModalWrapper
      className={open ? "openModal modal" : "modal"}
      styled={styled}
    >
      {open ? (
        <div>
          <Background />
          <section>
            <header>{header}</header>
            <Main styleNone={styleNone}>{children}</Main>
            <footer>
              <Button data-testid="closeButton" onClick={close} styled={styled}>
                {check}
              </Button>
            </footer>
          </section>
        </div>
      ) : null}
    </ModalWrapper>
  );
};

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

  ${({ styled }) => {
    return styled
      ? `color: #dc231e;`
      : `
      color: #0fd1c9;
      `;
  }};
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
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 70px;
  background: ${(props) => props.theme.color.titleColor};
  font-size: 18px;
  font-weight: 500;
  color: #000;
  ${({ styled }) => {
    return styled
      ? `background: #dc231e;`
      : `
      background: #0fd1c9;
      `;
  }};
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

Modal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  header: PropTypes.string,
  check: PropTypes.string,
  styleNone: PropTypes.bool,
  styled: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
