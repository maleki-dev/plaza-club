import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  padding: ${({ theme }) => theme.pxToRem(16)};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.boxShadow.outsetBlackMobile};
  border-radius: ${({ theme }) => theme.pxToRem('0 0 24 24')};
  gap: ${({ theme }) => theme.pxToRem(24)};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuButton = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.pxToRem(16)};
`;

export const Logo = styled(Link)`
  display: flex;
`;

export const HeaderButtonsContainer = styled.div`
  margin-right: auto;
  display: flex;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;

export const HeaderLogin = styled.span`
  padding-left: ${({ theme }) => theme.pxToRem(8)};
`;

export const SearchBox = styled.div`
  display: flex;
`;
