import { GREY_COLOR } from "../utils/consts";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ol,
  ul {
    list-style: none;
  }
  body {
    color: ${GREY_COLOR};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
  }
`


