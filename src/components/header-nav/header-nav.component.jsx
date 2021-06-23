import React from 'react';
import * as S from './header-nav.styles';
import NavItem from '../nav-item/nav-item.component';
import Arrow from '../arrow/arrow.component';

const HeaderNav = () => {
  return (
    <S.NavContainer>
      <S.MenuButton>
        <NavItem notLink={true}>محصولات</NavItem>
        <Arrow />
      </S.MenuButton>
      <NavItem to="/">پلازا پلاس</NavItem>
      <NavItem to="/">باشگاه مشتریان</NavItem>
      <NavItem to="/">پلازا مگ</NavItem>
      <NavItem to="/">سوالات متداول</NavItem>
      <NavItem to="/">برندها</NavItem>
    </S.NavContainer>
  );
};

export default HeaderNav;
