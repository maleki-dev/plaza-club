import styled, { css } from 'styled-components';

const smallButtonProperties = css`
  padding: ${({ theme }) => theme.pxToRem(4) + ' ' + theme.pxToRem(8)};
  font: ${({ theme }) => theme.fonts.xsNormal};
`;

const mediumButtonProperties = css`
  padding: ${({ theme }) => theme.pxToRem(10)};
  font: ${({ theme }) => theme.fonts.mdNormal};
`;

const mediumWideButtonProperties = css`
  padding: ${({ theme }) => theme.pxToRem(10) + ' ' + theme.pxToRem(16)};
`;

const getButtonSizeStyles = props => {
  if (props.size === 'small') return smallButtonProperties;
  else if (props.size === 'medium') return mediumButtonProperties;
  else if (props.size === 'mediumWide') return mediumWideButtonProperties;
  else return null;
};

export const ButtonContainer = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  border: ${({ theme, color }) => (color === 'background' ? theme.border.solidStroke : 'none')};
  color: ${({ theme, color }) =>
    color === 'background' ? theme.color.onSurface : theme.color.background};
  background-color: ${({ theme, color }) => theme.color[color]};
  ${getButtonSizeStyles}
`;

export const ButtonInner = styled.div`
  display: flex;
`;
