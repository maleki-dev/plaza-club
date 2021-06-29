import styled from 'styled-components/macro';

export const Container = styled.aside`
  margin: ${({ theme }) => theme.pxToRem('0 0 32 32')};
  flex-basis: 23.5%;
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.pxToRem('24 0')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.pxToRem(24)};
`;
