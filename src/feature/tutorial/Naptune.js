import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Naptune = ({ children }) => {
  return <Section className="naptuneBackground">{children}</Section>;
};

const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

Naptune.propTypes = {
  children: PropTypes.node,
};

export default Naptune;
