import React, { useState, useEffect, useRef } from 'react';
import * as S from './header-nav.styles';
import NavItem from '../nav-item/nav-item.component';
import Arrow from '../arrow/arrow.component';
import Navbar from '../navbar/navbar.component';
import { headerData } from './header-data';
// import useTimeout from '../../helpers/useTimeout.hook';

const HeaderNav = () => {
  const [show, setShow] = useState(false);

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <>
      <S.MenuButton onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <NavItem notlink={true} $gap="8" after={<Arrow direction={show ? 'up' : null} />}>
          محصولات
        </NavItem>
        {show ? <Navbar /> : null}
      </S.MenuButton>
      <S.NavContainer>
        {headerData.map((navItem, navKey) => (
          <NavItem to={navItem.href} key={navKey}>
            {navItem.text}
          </NavItem>
        ))}
      </S.NavContainer>
    </>
  );
};

export default HeaderNav;
