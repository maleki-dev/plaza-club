import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.pxToRem(24)};
  padding: ${({ theme }) => theme.pxToRem(16)};
  border-bottom: ${({ theme }) => theme.border.solidStroke};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.pxToRem(-16) + ' ' + 0};
`;
