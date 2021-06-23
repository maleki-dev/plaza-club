import React from 'react';
import * as S from './nav-item.styles';
import Arrow from '../arrow/arrow.component';

const NavItem = props => {
  const { children, ...otherProps } = props;
  return (
    <S.NavItemContainer as={props.notLink ? 'span' : null} {...otherProps}>
      {props.hovereffect ? (
        <S.NavItemBefore>
          <Arrow direction="left" fill="primary" />
        </S.NavItemBefore>
      ) : null}
      <S.NavItemText>{children}</S.NavItemText>
      {props.hovereffect ? (
        <S.NavItemAfter>
          <Arrow direction="left" fill="unselected" />
        </S.NavItemAfter>
      ) : null}
    </S.NavItemContainer>
  );
};

export default NavItem;
