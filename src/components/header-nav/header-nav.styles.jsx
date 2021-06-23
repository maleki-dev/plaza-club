import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.pxToRem(24)};
`;

export const MenuButton = styled.span`
  display: flex;
  align-items: baseline;
  border-left: ${({ theme }) => theme.border.solidStroke};
  padding-left: ${({ theme }) => theme.pxToRem(24)};
`;
