import styled, { css } from 'styled-components/macro';

const leftDirection = css`
  transform: rotate(90deg);
`;

const upDirection = css`
  transform: rotate(180deg);
`;

const getDirection = props => {
  if (props.direction === 'left') return leftDirection;
  else if (props.direction === 'up') return upDirection;
  else return null;
};

export const ArrowContainer = styled.span`
  fill: ${({ theme, fill }) => (fill ? theme.color[fill] : theme.color.onSurface)};
  width: ${({ theme }) => theme.pxToRem(8)};
  height: ${({ theme }) => theme.pxToRem(8)};
  display: flex;
  transition: 0.3s;

  ${getDirection}
`;
