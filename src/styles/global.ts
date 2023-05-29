import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }
    body {

        background: ${(props) => props.theme['darkGray']};
        color: ${(props) => props.theme['white']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', 'Helvetica', sans-serif;
        font-weight: 300;
        font-size: 1rem;
    }
`;
