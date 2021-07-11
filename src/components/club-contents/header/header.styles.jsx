import styled from 'styled-components/macro';

export const Container = styled.header`
  display: flex;
  gap: ${({ theme }) => theme.pxToRem(24)};
  padding: ${({ theme }) => theme.pxToRem(16)};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.pxToRem('-16 0')};
`;
