import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const transitionOpacity = css`
  transition: opacity 0.3s;
`;

const getItemColor = props => {
  if (props.color) {
    return props.theme.color[props.color];
  }

  return props.theme.color.onSurface;
};

export const NavItemBefore = styled.span`
  opacity: 0;
  margin-left: ${({ theme }) => theme.pxToRem(4)};
  ${transitionOpacity}
`;

export const NavItemAfter = styled.span`
  opacity: 1;
  margin-right: ${({ theme }) => theme.pxToRem(4)};
  ${transitionOpacity}
`;

const hoverStyles = css`
  display: inline-flex;
  transform: translateX(${({ theme }) => theme.pxToRem(20)});
  transition: transform 0.3s;

  &:hover {
    transform: translateX(0);

    ${NavItemBefore} {
      opacity: 1;
    }

    ${NavItemAfter} {
      opacity: 0;
    }
  }
`;

const getHoverStyles = props => {
  if (props.hovereffect) {
    return hoverStyles;
  }
  return null;
};

export const NavItemContainer = styled(Link)`
  font: ${({ theme }) => theme.fonts.mdNormal};
  color: ${props => getItemColor(props)};
  text-decoration: none;
  ${getHoverStyles}
`;
