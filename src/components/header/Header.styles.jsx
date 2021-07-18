import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: ${({ theme }) => theme.pxToRem(110)};
  position: sticky;
  top: 0;
  z-index: 90;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.boxShadow.outsetBlackLight};
  transition: 0.3s;
  margin-bottom: ${props => (props.$hideBottomNav ? props.theme.pxToRem(36) : 0)};
`;

export const HeaderTop = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.pxToRem(16)};
  background-color: ${({ theme }) => theme.color.background};
  position: relative;
  align-items: center;
  z-index: 200;
  transition: 0.3s;
  margin-bottom: ${props => (props.$hideBottomNav ? props.theme.pxToRem(-36) : 0)};
`;

export const Logo = styled(Link)`
  margin-left: ${({ theme }) => theme.pxToRem(32)};
  height: ${({ theme }) => theme.pxToRem(40)};
`;

export const HeaderButtonsContainer = styled.div`
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;

export const HeaderCartButtonContainer = styled.div`
  position: relative;
`;

export const HeaderLogin = styled.span`
  padding-left: ${({ theme }) => theme.pxToRem(8)};
`;

export const CountItems = styled.span`
  padding-top: ${({ theme }) => theme.pxToRem(4)};
  margin: ${({ theme }) => theme.pxToRem('-2 0 -2 12')};
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.background};
  font: ${({ theme }) => theme.fonts.smNormal};
  position: relative;
  width: ${({ theme }) => theme.pxToRem(24)};
  height: ${({ theme }) => theme.pxToRem(24)};
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    left: ${({ theme }) => theme.pxToRem(-8)};
    top: 50%;
    transform: translateY(-50%);
    border-width: ${({ theme }) => theme.pxToRem(4)};
    border-style: solid;
    border-color: transparent ${({ theme }) => theme.color.secondary} transparent transparent;
  }
`;
