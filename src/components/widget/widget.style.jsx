import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  border: ${({ theme }) => theme.border.solidStroke};
  flex-basis: 23.5%;
`;
