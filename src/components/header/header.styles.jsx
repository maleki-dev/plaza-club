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
