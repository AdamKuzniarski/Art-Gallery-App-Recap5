import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
   --main-bg-color: #e0e0e0;
   --navbar-bg-color: #344056;
   --navbar-hover-color: #302e4b
  }

  body {
    margin: 0;
    font-family: system-ui;    
  }

  body div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
   display: flex;
   flex-direction: column;
   align-items: center;
   flex: 1;
   padding-inline: 1rem;
   background-color: var(--main-bg-color);
  }

  /* img {
   width: 100%;
   height: auto;
  } */
`;
