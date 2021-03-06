import { createGlobalStyle } from "styled-components";

import assetRed from "./assets/images/asset-red.svg";

const Globalstyle = createGlobalStyle`
body {
    margin: 0;
    background: #00a5be;
    font-family: system-ui;
    overflow-x: hidden;
    background-image: url(${assetRed});
    background-position: left 200px top;
    background-repeat: no-repeat;
  }
  
  @media screen and (max-width: 1024px) {
    body {
      background-position: left 50px top;
    }
  }  
`;

export default Globalstyle;
