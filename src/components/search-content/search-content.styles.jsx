import styled from 'styled-components';

export const SearchContentContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  font: ${({ theme }) => theme.fonts.smNormal};
  padding-top: ${({ theme }) => theme.pxToRem(5)};
  border-radius: 0 0 ${({ theme }) => theme.pxToRem(4) + ' ' + theme.pxToRem(4)};
  box-shadow: ${({ theme }) =>
    0 + ' ' + theme.pxToRem(3) + ' ' + theme.pxToRem(3) + ' ' + 0 + ' ' + theme.color.stroke};
`;

export const SearchContentHeader = styled.h3`
  font: ${({ theme }) => theme.fonts.mdNormal};
  margin: ${({ theme }) => theme.pxToRem(4) + ' ' + 0};
  padding: ${({ theme }) => theme.pxToRem(8) + ' ' + theme.pxToRem(16)};
`;

export const SearchItem = styled.div`
  padding: ${({ theme }) => theme.pxToRem(8) + ' ' + theme.pxToRem(16)};
`;
