import styled from 'styled-components/macro';

export const Header = styled.div`
  height: ${({ theme }) => theme.pxToRem(100)};
  background: ${({ theme, $userColor }) => theme.color[$userColor]};
  display: flex;
  border-radius: ${({ theme }) => theme.pxToRem(24)};
  padding: ${({ theme }) => theme.pxToRem(16)};
  align-items: center;
`;

export const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${({ theme }) => theme.pxToRem(64)};
  height: ${({ theme }) => theme.pxToRem(64)};
  fill: ${({ theme, $userColor }) => theme.color[$userColor]};
  background-color: ${({ theme }) => theme.color.background};
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ theme }) => theme.pxToRem(16)};
  gap: ${({ theme }) => theme.pxToRem(8)};
`;

export const HeaderInfoName = styled.div`
  font: ${({ theme }) => theme.fonts.mdNormal};
`;

export const HeaderInfoScore = styled.div`
  font: ${({ theme }) => theme.fonts.xsNormal};
`;

export const Body = styled.div`
  padding: ${({ theme }) => theme.pxToRem('24 24 40')};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(24)};
`;
