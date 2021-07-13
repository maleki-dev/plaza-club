import React from 'react';
import * as S from './nav-item.styles';

const NavItem = props => {
  const { children, ...otherProps } = props;
  return (
    <S.NavItemContainer as={props.notlink ? 'span' : null} {...otherProps}>
      {props.before ? (
        <S.Before before={props.before} fill={props.color || 'onSurface'} {...otherProps}>
          {props.before}
        </S.Before>
      ) : null}
      {children}
      {props.after ? (
        <S.After after={props.after} fill={props.color || 'onSurface'} {...otherProps}>
          {props.after}
        </S.After>
      ) : null}
    </S.NavItemContainer>
  );
};

export default NavItem;
