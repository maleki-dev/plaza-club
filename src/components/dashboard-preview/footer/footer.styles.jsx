import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.pxToRem('0 32 16')};
`;

export const PointsRange = styled.div`
  margin: ${({ theme }) => theme.pxToRem('4 0')};
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
`;

export const MaxPoint = styled.span`
  color: ${({ theme }) => theme.color.subtitle};
`;

export const UserPoint = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font: ${({ theme }) => theme.fonts.bigBold};
`;
