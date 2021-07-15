import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #5429CC;
        --green: #33CC95;
        --red: #E52E4D;

        --blue-light: #6933ff;

        --text-title:#363F5F;
        --text-body: #969CB2;

        --background: #f8f2f5;
        --shape: #FFFFFF;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            // 16px*0.9375 = 15
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            // 16px*0.875 = 14
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        --webkit-font-smoothing: antialiased; // fontes mais nitidas
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`