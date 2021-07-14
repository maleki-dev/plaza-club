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
  padding: ${({ theme }) => theme.pxToRem('16 24')};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(24)};
  border-bottom: ${({ theme }) => theme.border.solidStrokeVariant};
  overflow: auto;
`;
