import React from 'react';
import * as S from './header-nav.styles';
import NavItem from '../nav-item/nav-item.component';
import Arrow from '../arrow/arrow.component';
import { headerData } from './header-data';

const HeaderNav = () => {
  return (
    <S.NavContainer>
      <S.MenuButton>
        <NavItem notlink={true}>محصولات</NavItem>
        <Arrow />
      </S.MenuButton>
      {headerData.map((navItem, navKey) => (
        <NavItem to={navItem.href} key={navKey}>
          {navItem.text}
        </NavItem>
      ))}
    </S.NavContainer>
  );
};

export default HeaderNav;
