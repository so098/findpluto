import React from "react";

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./common/styles/GlobalStyle";
import theme from "./common/styles/theme";

export const customRender = (children) =>
  render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>{children}</Router>
    </ThemeProvider>
  );
