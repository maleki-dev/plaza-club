import React, { useState, useEffect, useRef } from 'react';
import * as S from './header-nav.styles';
import NavItem from '../nav-item/nav-item.component';
import Arrow from '../arrow/arrow.component';
import Navbar from '../navbar/navbar.component';
import { headerData } from './header-data';
// import useTimeout from '../../helpers/useTimeout.hook';

const HeaderNav = () => {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef();

  const handleMouseOver = () => {
    const mouseOver = setTimeout(() => {
      setShow(true);
      clearTimeout(mouseOver);
      timeoutRef.current = null;
    }, 500);
    timeoutRef.current = mouseOver;
  };

  const handleMouseLeave = () => {
    const mouseLeave = setTimeout(() => {
      if (timeoutRef.current) return;
      setShow(false);
      clearTimeout(mouseLeave);
    }, 500);
  };

  return (
    <>
      <S.MenuButton onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <NavItem notlink={true} after={<Arrow direction={show ? 'up' : null} />}>
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
