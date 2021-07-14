import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  left: calc(50% - ${({ theme }) => theme.pxToRem(32)});
  min-width: ${({ theme }) => theme.pxToRem(300)};
  min-height: ${({ theme }) => theme.pxToRem(300)};
  max-width: ${({ theme }) => theme.pxToRem(450)};
  max-height: ${({ theme }) => theme.pxToRem(400)};
  /* padding: ${({ theme }) => theme.pxToRem(32)}; */
  background-color: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.pxToRem(24)};
  margin-top: ${({ theme }) => theme.pxToRem(16)};
  box-shadow: ${({ theme }) => theme.boxShadow.outsetBlack};
  display: ${props => (props.$show ? 'block' : 'none')};
  cursor: default;

  &:before {
    position: absolute;
    content: '';
    border-width: ${({ theme }) => theme.pxToRem(8)};
    border-style: solid;
    top: ${({ theme }) => theme.pxToRem(-16)};
    left: ${({ theme }) => theme.pxToRem(32)};
    margin-left: ${({ theme }) => theme.pxToRem(-8)};
    border-color: transparent transparent
      ${props => props.theme.color[props.$userColor || 'background']} transparent;
  }
`;
