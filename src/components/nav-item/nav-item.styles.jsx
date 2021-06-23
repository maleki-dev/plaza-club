import styled from 'styled-components';
import { Link } from 'react-router-dom';

const getItemColor = props => {
  if (props.color) {
    return props.theme.color[props.color];
  }

  return props.theme.color.onSurface;
};

export const NavItemText = styled.span`
  transition: transform 0.3s;
`;

export const NavItemBefore = styled.span`
  transition: transform 0.3s;
`;

export const NavItemAfter = styled.span`
  transition: transform 0.3s;
`;

export const NavItemContainer = styled(Link)`
  font: ${({ theme }) => theme.fonts.mdNormal};
  color: ${props => getItemColor(props)};
  text-decoration: none;

  &:hover {
    ${NavItemText} {
      //transform: translateX(-8px);
    }

    ${NavItemBefore} {
      // transform: translateX(-8px);
    }

    ${NavItemAfter} {
      //transform: translateX(-8px);
    }
  }
`;
