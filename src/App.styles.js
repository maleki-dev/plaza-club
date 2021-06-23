import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: 0 !important;
        box-sizing: border-box;
    }

    html {
        font-size: ${({ theme }) => theme.pxToRem(theme.htmlFontSize)};
    }

    body {
        max-width: ${({ theme }) => theme.pxToRem(100 * theme.htmlFontSize)};;
        margin: 0 auto;
        color: ${({ theme }) => theme.color.onSurface};
    }
`;
