import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const showStyles = css`
  transition-timing-function: cubic-bezier(1, 0, 1, 0), ease-in-out;
  max-height: 100rem;
  padding-top: ${({ theme }) => theme.pxToRem(16)};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 0;
  transition-property: max-height, padding-top;
  transition-duration: 0.5s, 0.5s;
  user-select: none;
  transition-timing-function: cubic-bezier(0, 1, 0, 1);
  overflow: hidden;
  /* padding: ${({ theme }) => theme.pxToRem(16)}; */
  padding-top: 0;

  ${({ $show }) => ($show ? showStyles : null)};
`;
