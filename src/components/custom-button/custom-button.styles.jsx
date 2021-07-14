import styled, { css } from 'styled-components/macro';

const deactiveStyles = css`
  cursor: default;
  opacity: 0.32;
`;

const linkStyles = css`
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.onSurface};
  border: none;
`;

const smallButtonProperties = css`
  padding: ${({ theme }) => theme.pxToRem('4 8')};
  font: ${({ theme }) => theme.fonts.xsNormal};
`;

const mediumButtonProperties = css`
  border-radius: ${({ theme }) => theme.pxToRem(16)};
  padding: ${({ theme }) => theme.pxToRem(10)};
  font: ${({ theme }) => theme.fonts.mdNormal};
  min-width: ${({ theme }) => theme.pxToRem(40)};
`;

const mediumWideButtonProperties = css`
  padding: ${({ theme }) => theme.pxToRem('10 16')};
  border-radius: ${({ theme }) => theme.pxToRem(20)};
  font: ${({ theme }) => theme.fonts.mdNormal};
`;

const getButtonSizeStyles = props => {
  if (props.$size === 'small') return smallButtonProperties;
  else if (props.$size === 'medium') return mediumButtonProperties;
  else if (props.$size === 'mediumWide') return mediumWideButtonProperties;
  else return null;
};

export const ButtonContainer = styled.button`
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  border: ${({ theme, $color }) => ($color === 'background' ? theme.border.solidStroke : 'none')};
  color: ${({ theme, $color }) =>
    $color === 'background' ? theme.color.onSurface : theme.color.background};
  background-color: ${({ theme, $color }) => theme.color[$color]};
  ${getButtonSizeStyles}
  ${props => (props.$deactive ? deactiveStyles : null)};
  ${props => (props.$link ? linkStyles : null)};
`;

export const ButtonInner = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  ${props => (props.$fill ? 'fill: ' + props.theme.color[props.$fill] : null)}
`;
