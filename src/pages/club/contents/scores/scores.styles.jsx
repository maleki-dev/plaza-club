import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Scoring = styled.div`
  padding-top: ${({ theme }) => theme.pxToRem(32)};
  margin-top: ${({ theme }) => theme.pxToRem(32)};
  display: flex;
`;
