import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.pxToRem(60)};
  gap: ${({ theme }) => theme.pxToRem(24)};
  align-items: center;
  justify-content: space-around;
`;
