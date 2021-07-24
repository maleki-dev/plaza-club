import styled, { css } from 'styled-components/macro';

export const BottomNav = styled.div`
  display: flex;
  position: relative;
  z-index: 100;
  background-color: ${({ theme }) => theme.color.background};
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.pxToRem(24)};
  padding: ${({ theme }) => theme.pxToRem('0 24')};
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  border-right: ${({ theme }) => theme.border.solidStroke};
  transition: margin-top 0.3s;

  /* height: ${({ theme }) => theme.pxToRem(40)}; */
`;

export const MenuButton = styled.span`
  display: flex;
  align-items: baseline;
  padding: ${({ theme }) => theme.pxToRem('0 16')};
  cursor: pointer;
`;

const overlayStyles = css`
  visibility: visible;
  opacity: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ScreenOverlay = styled.div`
  position: fixed;
  z-index: 20;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s;
  transition-timing-function: ease-in-out;

  ${({ $show }) => ($show ? overlayStyles : null)};
`;
