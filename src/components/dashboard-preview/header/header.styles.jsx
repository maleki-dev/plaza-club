import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.pxToRem(4) + ' ' + theme.pxToRem(4) + ' '} 0 0;
  background-color: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.pxToRem(24)};

  @media screen and (max-width: 1360px) {
    & button {
      display: none;
    }
  }
`;

export const HeaderUserIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.pxToRem(48)};
  min-height: ${({ theme }) => theme.pxToRem(48)};
  background-color: ${({ theme, color }) => theme.color[color]};
  border-radius: 50%;
  margin-left: ${({ theme }) => theme.pxToRem(16)};
`;

export const HeaderUserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderUserName = styled.div`
  font: ${({ theme }) => theme.fonts.lgBold};
  margin-bottom: ${({ theme }) => theme.pxToRem(4)};
`;

export const HeaderUserLevel = styled.div`
  display: flex;
  align-items: baseline;
  font: ${({ theme }) => theme.fonts.mdNormal};
`;

export const HeaderUserLevelColor = styled.span`
  color: ${({ theme, color }) => theme.color[color]};
  margin: ${({ theme }) => 0 + ' ' + theme.pxToRem(8) + ' ' + 0 + ' ' + theme.pxToRem(16)};
`;
