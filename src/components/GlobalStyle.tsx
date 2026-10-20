import { createGlobalStyle } from "styled-components";

// same reset from lecture, plus the nunito font from mp-1
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font: calc(14px + 0.3vw)/1.5 "Nunito", Arial, sans-serif;
        background-color: #ffffff;
    }

    @media screen and (max-width: 1000px) {
        body {
            font: calc(18px + 0.1vw)/1.5 "Nunito", Arial, sans-serif;
        }
    }
`;

export default GlobalStyle;
