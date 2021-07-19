import styled from 'styled-components/macro';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 0.5s;
  display: flex;
  flex-direction: column;
  z-index: ${({ $open }) => ($open ? 100 : -1)};
  overflow-y: auto;
  padding: ${({ theme }) => theme.pxToRem('24 32')};
  background-color: ${({ theme }) => theme.color.background};
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  padding-bottom: ${({ theme }) => theme.pxToRem(16)};
  border-bottom: ${({ theme }) => theme.border.solidStrokeVariant};
`;

export const Bottom = styled.div`
  margin: ${({ theme }) => theme.pxToRem('0 -24')};
`;
