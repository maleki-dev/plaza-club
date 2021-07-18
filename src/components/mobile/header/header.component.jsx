import React, { useState, useRef } from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import { ReactComponent as UserIcon } from '../../../assets/images/svg/__user.svg';
import { ReactComponent as CartIcon } from '../../../assets/images/svg/__cart.svg';
import { ReactComponent as MenuIcon } from '../../../assets/images/svg/mobile_menu.svg';
import BadgeInButton from '../../badge-in-button/badge-in-button.component';
import logo from '../../../assets/images/logo.png';
import * as S from './header.styles';
import levelAssesment from '../../../utils/levelAssesment';
import withUser from '../../../hoc/withUser.component';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors';
import SearchBox from '../../search-box/search-box.component';
import Menu from '../menu/menu.component';

const Header = ({ currentUser }) => {
  const cartItemsCount = useSelector(state => selectCartItemsCount(state));

  let color = 'background';

  const cartButtonProps = {
    $link: true,
    $size: 'medium',
  };

  let userButtonProps = {
    $size: 'medium',
  };

  if (currentUser) {
    color = levelAssesment(currentUser.score).color;
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

  return (
    <S.Header>
      <S.Row>
        <S.MenuButton>
          <MenuIcon />
        </S.MenuButton>
        <S.Logo to="/">
          <img alt="plaza-logo" src={logo} />
        </S.Logo>
        <S.HeaderButtonsContainer>
          <CustomButton {...cartButtonProps}>
            {cartItemsCount ? <BadgeInButton>{cartItemsCount}</BadgeInButton> : null}
            <CartIcon />
          </CustomButton>

          <CustomButton {...userButtonProps}>
            {currentUser ? null : <S.HeaderLogin> وارد شوید </S.HeaderLogin>}
            <UserIcon />
          </CustomButton>
        </S.HeaderButtonsContainer>
      </S.Row>
      <S.Row>
        <SearchBox />
      </S.Row>
      <Menu />
    </S.Header>
  );
};

export default withUser(Header);
