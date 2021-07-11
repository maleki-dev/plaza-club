import React, { useState, useEffect, useCallback } from 'react';
import SearchBox from '../search-box/search-box.component';
import CustomButton from '../custom-button/custom-button.component';
import HeaderNav from '../header-nav/header-nav.component';
import { ReactComponent as UserIcon } from '../../assets/images/svg/__user.svg';
import { ReactComponent as CartIcon } from '../../assets/images/svg/__cart.svg';
import logo from '../../assets/images/logo.png';
import * as S from './header.styles';
import Wrapper from '../wrapper/wrapper.component';
import levelAssesment from '../../utils/levelAssesment';
import { useSelector } from 'react-redux';

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser);

  const cartButtonProps = {
    $color: 'background',
    $size: 'medium',
  };

  let userButtonProps = {
    $size: 'medium',
  };

  if (currentUser) {
    const { color } = levelAssesment(currentUser.score);
    userButtonProps = {
      ...userButtonProps,
      $color: color,
      $fill: 'background',
    };
  } else {
    userButtonProps = {
      ...userButtonProps,
      $color: 'background',
      $fill: 'onSurface',
      $href: '/auth/sign-in',
    };
  }

  const [hideBottomNav, setHideBottomNav] = useState(false);
  const [scroll, setScroll] = useState(0);

  const scrollHandler = useCallback(() => {
    let currentScroll = document.documentElement.scrollTop;
    setHideBottomNav(scroll < currentScroll);
    setScroll(currentScroll);
  }, [scroll]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);

  return (
    <S.Header $hideBottomNav={hideBottomNav}>
      <Wrapper>
        <S.HeaderTop $hideBottomNav={hideBottomNav}>
          <S.Logo to="/">
            <img alt="plaza-logo" src={logo} />
          </S.Logo>
          <SearchBox />
          <S.HeaderButtonsContainer>
            <CustomButton {...cartButtonProps}>
              <CartIcon />
            </CustomButton>
            <CustomButton {...userButtonProps}>
              {currentUser ? null : <S.HeaderLogin> وارد شوید </S.HeaderLogin>}
              <UserIcon />
            </CustomButton>
          </S.HeaderButtonsContainer>
        </S.HeaderTop>
        <HeaderNav />
      </Wrapper>
    </S.Header>
  );
};

export default Header;
