import styled from 'styled-components/macro';

export const SideInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(16)};
  margin-top: ${({ theme }) => theme.pxToRem(32)};
`;

export const SideInfoItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;

export const SideInfoRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.pxToRem(56)};
  height: ${({ theme }) => theme.pxToRem(56)};
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  background-color: ${({ theme }) => theme.color.surface};
`;

export const SideInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.pxToRem('4 0')}; ;
`;

export const SideInfoRightBold = styled.div`
  font: ${({ theme }) => theme.fonts.bigBold};
  color: ${({ theme }) => theme.color.primary};
  margin-right: ${({ theme }) => theme.pxToRem(4)};
`;

export const SideInfoRightSub = styled.div`
  font: ${({ theme }) => theme.fonts.xsNormal};
`;

export const SideInfoLeftTop = styled.div`
  font: ${({ theme }) => theme.fonts.mdBold};
`;

export const SideInfoLeftSub = styled.div`
  color: ${({ theme }) => theme.color.subtitle};
`;
