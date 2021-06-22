import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.pxToRem(110)};
  position: sticky;
  top: 0;
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
