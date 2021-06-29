import styled, { css } from 'styled-components/macro';

const highContent = css`
  padding: ${({ theme }) => theme.pxToRem('32 0')};
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  border-top: ${({ theme }) => theme.border.solidStroke};
  padding: ${({ theme }) => theme.pxToRem('24 16 16')};
`;

export const FooterTop = styled.div`
  padding-bottom: ${({ theme }) => theme.pxToRem(24)};
  display: flex;
  gap: ${({ theme }) => theme.pxToRem(24)};
  border-bottom: ${({ theme }) => theme.border.solidStrokeVarient};
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
  ${props => (props.$high ? highContent : null)}
`;

export const FooterNav = styled.div`
  display: inline-flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.pxToRem(24)};
  }
`;

export const FooterNavTitle = styled.h3`
  font: ${({ theme }) => theme.fonts.lgBold};
  border-right: ${({ theme }) => theme.border.solidPrimaryThick};
  padding-right: ${({ theme }) => theme.pxToRem(8)};
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
`;

export const FooterNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: ${({ theme }) => theme.pxToRem(32)};
  gap: ${({ theme }) => theme.pxToRem(6)};
`;

export const FooterEnamad = styled.div`
  min-width: ${({ theme }) => theme.pxToRem(140)};
  min-height: ${({ theme }) => theme.pxToRem(200)};
  display: flex;
  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.pxToRem(32)};
  }
`;

export const FooterEnamadLink = styled.a`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.pxToRem(8)};
  border: ${({ theme }) => theme.border.solidStroke};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterAboutUs = styled.div`
  font: ${({ theme }) => theme.fonts.smNormalHighLine};
  margin-top: ${({ theme }) => theme.pxToRem(24)};
`;

export const FooterStoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const FooterStoreItem = styled.a`
  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.pxToRem(16)};
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(8)};
  text-align: center;
  margin: 0 auto;
  font: ${({ theme }) => theme.fonts.xsNormal};
`;

export const CopyrightPale = styled.div`
  color: ${({ theme }) => theme.color.subtitle};
`;
