import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const SpaceCraft = ({ children, speaker }) => {
  return <Craft speaker={speaker}>{children}</Craft>;
};

const Craft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ speaker }) => {
    return speaker === "me"
      ? `
      background: url("/assets/spaceCraft.png") no-repeat center/cover`
      : `background: url("/assets/spaceCraft_purple.png") no-repeat center/cover`;
  }};
  transition: all 0.2s;
`;

SpaceCraft.propTypes = {
  children: PropTypes.node,
  speaker: PropTypes.string,
};

export default SpaceCraft;
