import styled from 'styled-components/macro';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(24)};
  z-index: 100;
  background: ${({ theme }) => theme.color.background};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  min-width: 30%;
  padding: ${({ theme }) => theme.pxToRem('24 32')};
`;
