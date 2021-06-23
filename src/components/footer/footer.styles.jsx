import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  border-top: ${({ theme }) => theme.border.solidStroke};
  padding: ${({ theme }) => theme.pxToRem(16)};
`;

export const FooterTop = styled.div`
  padding: ${({ theme }) => theme.pxToRem(24) + ' ' + 0};
  display: flex;
  gap: ${({ theme }) => theme.pxToRem(24)};
  border-bottom: ${({ theme }) => theme.border.solidStrokeVarient};
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
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
