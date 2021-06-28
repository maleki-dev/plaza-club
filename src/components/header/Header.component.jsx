import React from 'react';

import SearchBox from '../search-box/search-box.component';
import CustomButton from '../custom-button/custom-button.component';
import HeaderNav from '../header-nav/header-nav.component';
import { ReactComponent as UserIcon } from '../../assets/images/svg/__user.svg';
import { ReactComponent as CartIcon } from '../../assets/images/svg/__cart.svg';

import logo from '../../assets/images/logo.png';
import * as S from './header.styles';

const Header = () => {
  const cartButtonProps = {
    $color: 'background',
    $size: 'medium',
  };
  const userButtonProps = {
    $color: 'success',
    $size: 'medium',
    $fill: 'background',
  };

  return (
    <S.Header>
      <S.HeaderTop>
        <S.Logo to="/">
          <img alt="plaza-logo" src={logo} />
        </S.Logo>
        <SearchBox />
        <S.HeaderButtonsContainer>
          <CustomButton {...cartButtonProps}>
            <CartIcon />
          </CustomButton>
          <CustomButton {...userButtonProps}>
            <UserIcon />
          </CustomButton>
        </S.HeaderButtonsContainer>
      </S.HeaderTop>
      <S.HeaderBottom>
        <HeaderNav />
      </S.HeaderBottom>
    </S.Header>
  );
};

export default Header;
