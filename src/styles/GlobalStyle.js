import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
 
  * {
    font-family: 'Noto Sans KR';
  }
  
  html, body {
    width: 100%;
    height: 100%;
    background:#000;
  }

  h1,
  h2 {
    font-weight: 500;
  }

  button, input {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  img {
    width: 100%;
    border: 0;
    vertical-align: middle;
  }

  input {
    border: none;
    background: none;
  }
  input:focus { outline: none; color: #fff; }
  #root {
    height: 100%;
  }

  .naptuneBackground{
    position: absolute;
    top:0;
    left:0;
    background-image: url('/assets/neptune.png');
  }
`;

export default GlobalStyle;
