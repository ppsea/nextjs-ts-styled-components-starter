import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

//NOTE style reset & global style
export default createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
