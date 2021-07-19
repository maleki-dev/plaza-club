import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';

const suedoStyles = css`
  fill: ${({ theme, fill }) => theme.color[fill]};
  padding: 0 !important;
  display: inline-flex;
`;

const getItemColor = props => {
  if (props.color) {
    return props.theme.color[props.color];
  }

  return props.theme.color.onSurface;
};

export const Before = styled.span`
  margin-left: ${props => props.theme.pxToRem(props.$gap || 8)};
  ${suedoStyles}
`;

export const After = styled.span`
  margin-right: ${props => props.theme.pxToRem(props.$gap || 8)};
  ${suedoStyles}
`;

const hoverBlue = css`
  color: ${props => props.theme.color.secondary};

  svg {
    fill: ${props => props.theme.color.secondary};
  }
`;

export const NavItemContainer = styled(Link)`
  font: ${props => props.theme.fonts[props.$font || 'mdNormal']};
  color: ${props => getItemColor(props)};
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  transition: color 0.3s;

  &:hover {
    ${props => (props.$hoverBlue ? hoverBlue : null)}
  }
`;
