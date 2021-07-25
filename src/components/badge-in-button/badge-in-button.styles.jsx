import styled from 'styled-components/macro';

export const Container = styled.span`
  padding-top: ${({ theme }) => theme.pxToRem(2)};
  margin: ${({ theme }) => theme.pxToRem('-2 0 -2 12')};
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.background};
  font: ${({ theme }) => theme.fonts.smNormal};
  position: relative;
  width: ${({ theme }) => theme.pxToRem(24)};
  height: ${({ theme }) => theme.pxToRem(24)};
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    left: ${({ theme }) => theme.pxToRem(-8)};
    top: 50%;
    transform: translateY(-50%);
    border-width: ${({ theme }) => theme.pxToRem(4)};
    border-style: solid;
    border-color: transparent ${({ theme }) => theme.color.secondary} transparent transparent;
  }
`;
