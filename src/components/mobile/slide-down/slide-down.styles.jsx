import styled, { css } from 'styled-components/macro';
import hexToRgba from 'hex-to-rgba';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const showStyles = css`
  transition-timing-function: cubic-bezier(1, 0, 1, 0), ease-in-out;
  max-height: 100rem;
`;
// padding-top: ${({ theme }) => theme.pxToRem(16)};

export const DropDown = styled.div`
  max-height: 0;
  transition-property: max-height, padding-top;
  transition-duration: 0.5s, 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0, 1);
  overflow: hidden;
  margin: ${({ theme }) => theme.pxToRem('0 -24')};
  ${({ $show }) => ($show ? showStyles : null)};
`;

const deeperStyles = css`
  padding-bottom: ${({ theme }) => theme.pxToRem(16)};
  background-color: ${({ theme }) => hexToRgba(theme.color.subtitle, 0.04)};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(16)};
  margin-top: ${({ theme }) => theme.pxToRem(16)};
  user-select: none;
  padding: ${({ theme }) => theme.pxToRem('16 24 0')};
  ${props => (props.$deeper ? deeperStyles : null)};

  a {
    padding-right: ${({ theme }) => theme.pxToRem(16)};
  }
`;
