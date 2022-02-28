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
    border: none;
    background: none;
    transition: all 0.2s;    
    cursor: pointer;
  }

  input[type='text'] {
    color: #fff;
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

  button:focus, input:focus { outline: none; color: #fff; }

  button:hover, input[type='submit']:hover {
    background-color: #0fd1c92e;
    box-shadow: 0 0 10px ${(props) => props.theme.color.titleColor};
  }

  #root {
    height: 100%;
  }

  .naptuneBackground{
    position: absolute;
    top:0;
    left:0;
    background: url('/assets/neptune.png') no-repeat center/cover;
  }
`;

export default GlobalStyle;
