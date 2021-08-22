import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    --bg: #212529;
    --dbg: #051923;
    --bg2: #495057;
    --bg-btn: #ADB5BD;
    --border: #343A40;
    --t-color: #ADB5BD;
    --tt-color: #F8F9FA;
    --nt-color: #ADB5BD;

    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --gray-2: #363636;
    --deep-dark: #1E1E1E;
    --white : white;
    --black: black;
  }
  html {
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--bg2); /*--dark-bg*/
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img, svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
