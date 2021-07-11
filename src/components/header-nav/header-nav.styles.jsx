import styled from 'styled-components/macro';

export const NavContainer = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.pxToRem(24)};
  padding: ${({ theme }) => theme.pxToRem('0 16 16')};
  transition: margin-top 0.3s;

  /* height: ${({ theme }) => theme.pxToRem(40)}; */
`;

export const MenuButton = styled.span`
  display: flex;
  align-items: baseline;
  border-left: ${({ theme }) => theme.border.solidStroke};
  padding-left: ${({ theme }) => theme.pxToRem(24)};
`;
