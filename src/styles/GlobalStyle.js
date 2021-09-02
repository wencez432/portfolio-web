import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    --ch-green: #212529;
    --gunmetal: #343A40;
    --dv-grey: #495057;
    --cd-blue-cray: #ADB5BD;
    --cultured: #F8F9FA;

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
    background-color: var(--dv-grey); /*--dark-bg*/
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
`;
export default GlobalStyles;
