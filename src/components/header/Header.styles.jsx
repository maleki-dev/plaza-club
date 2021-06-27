import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.pxToRem(110)};
  position: sticky;
  top: 0;
  z-index: 90;
  background-color: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.stroke}; ;
`;

export const HeaderTop = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.pxToRem(16)};
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

export const HeaderBottom = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.pxToRem('0 16 16')};
`;
