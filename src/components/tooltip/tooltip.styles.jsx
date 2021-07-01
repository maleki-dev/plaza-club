import styled, { css } from 'styled-components';

const upStyles = css`
  bottom: calc(100% + 10px);
  margin-left: ${({ theme }) => theme.pxToRem(-36)};

  &:before {
    top: 100%;
    left: 50%;
    margin-left: ${({ theme }) => theme.pxToRem(-6)};
    border-color: ${({ theme }) => theme.color.stroke} transparent transparent transparent;
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s opacity;
  padding: ${({ theme }) => theme.pxToRem('8 0')};
  text-align: center;
  width: ${({ theme }) => theme.pxToRem(72)};
  border-radius: ${({ theme }) => theme.pxToRem(5)};
  border: ${({ theme }) => theme.border.solidStroke};
  background-color: ${({ theme }) => theme.color.background};
  left: ${props => props.left + '%'};

  &:before {
    position: absolute;
    content: '';
    border-width: ${({ theme }) => theme.pxToRem(6)};
    border-style: solid;
  }
  ${({ direction }) => (direction === 'up' ? upStyles : null)}
`;

export const Container = styled.span`
  position: relative;

  &:hover {
    ${Tooltip} {
      visibility: visible;
      opacity: 1;
    }
  }
`;
