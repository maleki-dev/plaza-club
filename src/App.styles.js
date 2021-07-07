import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
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
        font: ${({ theme }) => theme.fonts.mdNormal};
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.onSurface};
    }

    h1 {
        font: ${({ theme }) => theme.fonts.xxBigBold};
    }

    h2 {
        font: ${({ theme }) => theme.fonts.xBigBold};
    }

    h3 {
        font: ${({ theme }) => theme.fonts.bigBold};
    }

    h4 {
        font: ${({ theme }) => theme.fonts.lgBold};
    }

    h5 {
        font: ${({ theme }) => theme.fonts.mdBold};
    }
`;

export default GlobalStyles;
