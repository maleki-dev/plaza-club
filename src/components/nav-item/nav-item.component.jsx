import React from 'react';
import * as S from './nav-item.styles';
import Arrow from '../arrow/arrow.component';

const NavItem = props => {
  const { children, ...otherProps } = props;
  return (
    <S.NavItemContainer as={props.notlink ? 'span' : null} {...otherProps}>
      {props.hovereffect ? (
        <S.NavItemBefore>
          <Arrow direction="left" fill="primary" />
        </S.NavItemBefore>
      ) : null}
      {props.before ? (
        <S.Before before={props.before} fill={props.color || 'onSurface'}>
          {props.before}
        </S.Before>
      ) : null}
      {children}
      {props.hovereffect ? (
        <S.NavItemAfter>
          <Arrow direction="left" fill="unselected" />
        </S.NavItemAfter>
      ) : null}
    </S.NavItemContainer>
  );
};

export default NavItem;
