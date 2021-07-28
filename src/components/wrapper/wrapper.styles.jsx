import styled from 'styled-components/macro';
const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100vw - ${scrollBarWidth});
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.pxToRem(1600)};
  width: 100%;
`;
