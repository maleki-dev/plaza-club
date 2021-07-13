import styled from 'styled-components/macro';

export const NavContainer = styled.nav`
  display: inline-flex;
  gap: ${({ theme }) => theme.pxToRem(24)};
  padding: ${({ theme }) => theme.pxToRem('0 24')};
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  border-right: ${({ theme }) => theme.border.solidStroke};
  transition: margin-top 0.3s;

  /* height: ${({ theme }) => theme.pxToRem(40)}; */
`;

export const MenuButton = styled.span`
  display: inline-flex;
  align-items: baseline;
  padding: ${({ theme }) => theme.pxToRem('0 16 16 24')};
  margin-bottom: ${({ theme }) => theme.pxToRem(-16)};
  cursor: pointer;
`;
