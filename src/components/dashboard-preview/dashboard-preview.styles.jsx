import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  border: ${({ theme }) => theme.border.solidStroke};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.pxToRem(4) + ' ' + theme.pxToRem(4) + ' '} 0 0;
  background-color: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.pxToRem(24)};
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
  font: ${({ theme }) => theme.fonts.bigBold};
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

export const Content = styled.div`
  padding: ${({ theme }) => theme.pxToRem(24) + ' ' + theme.pxToRem(32)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.pxToRem(24)};
`;

export const PointsRange = styled.div`
  margin-top: ${({ theme }) => theme.pxToRem(4)};
  display: flex;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.pxToRem(2)};
  justify-content: space-between;
  border-bottom: ${({ theme }) => theme.border.solidStroke};
  color: ${({ theme }) => theme.color.subtitle};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    border-radius: ${({ theme }) => theme.pxToRem(1)};
    left: 0;
    bottom: ${({ theme }) => theme.pxToRem(-1.5)};
    height: ${({ theme }) => theme.pxToRem(2)};
    width: ${({ width }) => width + '%'};
    background-color: ${({ theme }) => theme.color.success};
  }
`;

export const PointsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font: ${({ theme }) => theme.fonts.mdNormal};
`;

export const MaxPoint = styled.span`
  color: ${({ theme }) => theme.color.subtitle};
`;

export const UserPoint = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font: ${({ theme }) => theme.fonts.bigBold};
`;
