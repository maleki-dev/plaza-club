import React, { useState, useRef } from 'react';
import * as S from './header-nav.styles';
import NavItem from '../nav-item/nav-item.component';
import Arrow from '../arrow/arrow.component';
import Navbar from '../navbar/navbar.component';
import { headerData } from './header-data';
import useScroll from '../../helpers/useScroll.hook';
// import useTimeout from '../../helpers/useTimeout.hook';

const HeaderNav = () => {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef();
  const delay = 500;

  const handleMouseEnter = () => {
    const mouseEnter = setTimeout(() => {
      setShow(true);
      clearTimeout(mouseEnter);
      timeoutRef.current = null;
    }, delay);
    timeoutRef.current = mouseEnter;
  };

  useScroll(() => setShow(false));

  const handleMouseLeave = () => {
    const mouseLeave = setTimeout(() => {
      if (timeoutRef.current) return;
      setShow(false);
      clearTimeout(mouseLeave);
    }, delay);
  };

  return (
    <>
      <S.MenuButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <NavItem notlink={true} after={<Arrow direction={show ? 'up' : null} />}>
          محصولات
        </NavItem>
        <Navbar $show={show} />
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
