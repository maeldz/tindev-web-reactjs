import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/*@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');*/

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
  }

  body {
    background: #fafafa;
    -webkit-font-smoothing: antialiased !important;
  }
  
  body, input, button {
      /*font: 14px 'Roboto', sans-serif;*/
      font-family: Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
