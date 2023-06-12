import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 @font-face {
  
  font-family: 'Font Name';
  ;
 }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    padding-top: 10px;
    background-color: #1F2937;
    color: black;
    @media (max-width: 1044px) {
    background-color: white;
}
  }
  p {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h5 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
