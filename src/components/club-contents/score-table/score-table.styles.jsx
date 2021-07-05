import styled from 'styled-components/macro';

export const Value = styled.span`
  color: ${({ $type, theme }) => ($type === 'inc' ? theme.color.primary : theme.color.onSurface)};
`;

export const Title = styled.span`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.pxToRem('-8 0')};
`;

export const Subtitle = styled.span`
  font: ${({ theme }) => theme.fonts.xsNormal};
  color: ${({ theme }) => theme.color.subtitle};
  margin-top: ${({ theme }) => theme.pxToRem(4)};
`;

export const Details = styled.div`
  margin: ${({ theme }) => theme.pxToRem('-8 0')};
`;
