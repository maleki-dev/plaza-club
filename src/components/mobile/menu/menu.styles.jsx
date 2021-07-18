import styled from 'styled-components/macro';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  z-index: 1000;
  overflow-y: auto;
  padding: ${({ theme }) => theme.pxToRem('24 32')};
  background-color: ${({ theme }) => theme.color.background};
`;

export const ButtonsContainer = styled.div`
  background-color: ${({ theme }) => theme.color.newBackground};
  padding: ${({ theme }) => theme.pxToRem(24)};
  border-radius: ${({ theme }) => theme.pxToRem(24)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.pxToRem('24 16')};
  text-align: center;
`;

export const Name = styled.h3`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
`;

export const MobileNumber = styled.div`
  color: ${({ theme }) => theme.color.subtitle};
`;

export const UserBigIcon = styled.div`
  background-color: ${({ theme }) => theme.color.success};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.pxToRem(96)};
  height: ${({ theme }) => theme.pxToRem(96)};
  margin: ${({ theme }) => theme.pxToRem('16')} auto;
  border-radius: ${({ theme }) => theme.pxToRem(24)};
`;

export const NavContainer = styled.div`
  margin: ${({ theme }) => theme.pxToRem('24 0')};
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.div`
  padding: ${({ theme }) => theme.pxToRem(16)};
  border-radius: ${({ theme }) => theme.pxToRem(24)};
  border: ${({ theme }) => theme.border.solidStrokeVariant};
  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.pxToRem(8)};
  }
`;
