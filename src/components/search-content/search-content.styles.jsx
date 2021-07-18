import styled from 'styled-components/macro';
import NavItem from '../nav-item/nav-item.component';

export const Top = styled.div`
  margin: ${({ theme }) => theme.pxToRem('8 0 16')};
  /* padding: ${({ theme }) => theme.pxToRem('8 16')}; */
`;

export const Bottom = styled.div`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  background-color: ${({ theme }) => theme.color.newBackground};
  padding: ${({ theme }) => theme.pxToRem('16 0 24')};
  border-radius: ${({ theme }) => theme.pxToRem(24)};
  margin: ${({ theme }) => theme.pxToRem('0 24')};
`;

export const SearchItem = styled(NavItem)`
  padding: ${({ theme }) => theme.pxToRem('8 24')};
`;

export const SearchItemHighlight = styled.span`
  color: ${({ theme }) => theme.color.primary};
  margin-right: ${({ theme }) => theme.pxToRem(8)};
`;

export const NotFound = styled.div`
  margin: ${({ theme }) => theme.pxToRem('16 24')};
`;

export const SearchInfo = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.pxToRem('16 24 0')};
`;

export const MostSearchedItem = styled(NavItem)`
  :not(:last-of-type) {
    margin-left: ${({ theme }) => theme.pxToRem(32)};
  }
`;
