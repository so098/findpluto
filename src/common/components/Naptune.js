import React from "react";

import styled from "styled-components";

function Naptune({ children }) {
  return <Section className="naptuneBackground">{children}</Section>;
}

const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Naptune;
