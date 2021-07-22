import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.pxToRem(1600)};
  width: 100%;
`;
