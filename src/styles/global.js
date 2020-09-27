import { createGlobalStyle } from "styled-components";

import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Roboto:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html,
body,
#root {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background:#fff;
  color:#2B2B2B;
  font-family: "MuseoSans500", sans-serif;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

div {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

button {
  font-family: "MuseoSans500", sans-serif;
  border: 0;
  cursor: pointer;
  background-color: transparent;
}

input {
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
  font-weight: unset;
}

ul {
  list-style: none;
}

.toastsuccess {
  border-radius: 6px;
  background-color: ${colors.primary} !important;
}

.Toastify__toast--error {
  border-radius: 6px;
  background-color: ${colors.danger} !important;
}

.Toastify__toast-body {
  font-family: "GilroyBold" !important;
  font-size: 14px;
  padding: 0 16px;
}
`;

export default GlobalStyle;

// @font-face {
//     font-family: "MuseoSlab700";
//     src: url(${MuseoSlab700}) format("opentype");
//   }

// @font-face {
//     font-family: "MuseoSans700";
//     src: url(${MuseoSans700}) format("opentype");
//   }

// @font-face {
//     font-family: "MuseoSans500";
//     src: url(${MuseoSans500}) format("opentype");
//   }
