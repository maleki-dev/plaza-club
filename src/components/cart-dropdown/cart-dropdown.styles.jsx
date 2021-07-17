import styled from 'styled-components/macro';

export const Header = styled.div`
  border-radius: ${({ theme }) => theme.pxToRem('24 24 0 0')};
  padding: ${({ theme }) => theme.pxToRem('16 24')};
  font: ${({ theme }) => theme.fonts.mdNormal};
  min-width: ${({ theme }) => theme.pxToRem('448')};
  display: flex;
`;

export const HeaderButton = styled.div`
  margin-right: auto;
  a {
    font: ${({ theme }) => theme.fonts.xsNormal};
  }
`;

export const Body = styled.div`
  padding: ${({ theme }) => theme.pxToRem('16 24 16 16')};
  margin-left: ${({ theme }) => theme.pxToRem(8)};
  display: flex;
  flex-direction: column;
  border-bottom: ${({ theme }) => theme.border.solidStrokeVariant};
  max-height: ${({ theme }) => theme.pxToRem(260)};
  overflow: auto;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.pxToRem(6)};
  }

  &::-webkit-scrollbar-track {
    box-shadow: unset;
    border-radius: ${({ theme }) => theme.pxToRem(3)};
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.pxToRem(3)};
    background-color: ${({ theme }) => theme.color.strokeVariant};
  }
`;

export const Footer = styled.div`
  padding: ${({ theme }) => theme.pxToRem('24 16')};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TotalPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  font: ${({ theme }) => theme.fonts.xsNormal};
  gap: ${({ theme }) => theme.pxToRem(8)};
`;

export const TotalPrice = styled.div`
  font: ${({ theme }) => theme.fonts.mdNormal};
`;
