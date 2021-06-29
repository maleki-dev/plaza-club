import styled from 'styled-components/macro';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.pxToRem(32)};
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  border: ${({ theme }) => theme.border.solidStroke};
  width: 100%;
`;
