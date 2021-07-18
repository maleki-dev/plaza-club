import { createGlobalStyle } from 'styled-components/macro';
import { isMobile } from 'react-device-detect';

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

        color: ${({ theme }) => theme.color.onSurface};
        font: ${({ theme }) => theme.fonts.mdNormal};
        background-color: ${({ theme }) => theme.color[isMobile ? 'body' : 'backgrund']};
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
