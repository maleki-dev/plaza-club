import styled from 'styled-components/macro';

export const Container = styled.div`
  display: inline-block;
  font: ${({ theme }) => theme.fonts.xsNormal};
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  padding: ${({ theme }) => theme.pxToRem('4 10')};
  margin: ${({ theme }) => theme.pxToRem('0 10')};
  border: ${({ theme, $color }) => ($color === 'background' ? theme.border.dashedStroke : 'none')};
  background-color: ${({ theme, $color }) => theme.color[$color]};
  color: ${({ theme, $color }) =>
    $color === 'background' ? theme.color.onSurface : theme.color.background};
`;
