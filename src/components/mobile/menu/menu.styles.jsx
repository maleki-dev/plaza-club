import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import MenuProvider from '../../../providers/menu.provider';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $open }) => ($open ? 0 : '-100vw')};
  transition: right 0.5s;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  z-index: 1000;
  overflow-y: auto;
  padding: ${({ theme }) => theme.pxToRem('24 32')};
  background-color: ${({ theme }) => theme.color.background};

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.pxToRem(6)};
  }

  &::-webkit-scrollbar-track {
    box-shadow: unset;
    border-radius: ${({ theme }) => theme.pxToRem(3)};
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.pxToRem(3)};
    background-color: ${({ theme }) => theme.color.strokeVariant};
  }
`;

export const ButtonsContainer = styled.div`
  background-color: ${({ theme }) => theme.color.newBackground};
  padding: ${({ theme }) => theme.pxToRem(24)};
  border-radius: ${({ theme }) => theme.pxToRem(24)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.pxToRem('24 16')};
  text-align: center;
`;

export const Name = styled.h3`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
`;

export const MobileNumber = styled.div`
  color: ${({ theme }) => theme.color.subtitle};
`;

export const UserBigIcon = styled.div`
  background-color: ${({ theme, $color }) => theme.color[$color]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.pxToRem(96)};
  height: ${({ theme }) => theme.pxToRem(96)};
  margin: ${({ theme }) => theme.pxToRem('16')} auto;
  border-radius: ${({ theme }) => theme.pxToRem(24)};
  fill: ${({ theme, $color }) =>
    $color === 'background' ? theme.color.unselected : theme.color.background};
  border: ${({ theme, $color }) =>
    $color === 'background' ? theme.border.dashedUnselectedThick : 'none'};
`;

export const NavContainer = styled(MenuProvider)`
  margin: ${({ theme }) => theme.pxToRem('24 0')};
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.div`
  padding: ${({ theme }) => theme.pxToRem('16 24')};
  border-radius: ${({ theme }) => theme.pxToRem(24)};
  border: ${({ theme }) => theme.border.solidStrokeVariant};

  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.pxToRem(8)};
  }
`;

export const BlueLink = styled(Link)`
  font: ${props => props.theme.fonts[props.$font || 'xsNormal']};
  color: ${({ theme }) => theme.color.secondary};
`;
