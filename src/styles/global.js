import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html, h1 {
  background: #eee;
  font-family: "Roboto", sans-serif;
  height: 100%;
  width: 100%;
}
`;

export default GlobalStyle;
