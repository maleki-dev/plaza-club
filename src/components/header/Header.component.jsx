import React, { useState, useEffect, useCallback, useRef } from 'react';
import SearchBox from '../search-box/search-box.component';
import CustomButton from '../custom-button/custom-button.component';
import HeaderNav from '../header-nav/header-nav.component';
import { ReactComponent as UserIcon } from '../../assets/images/svg/__user.svg';
import { ReactComponent as CartIcon } from '../../assets/images/svg/__cart.svg';
import logo from '../../assets/images/logo.png';
import * as S from './header.styles';
import Wrapper from '../wrapper/wrapper.component';
import levelAssesment from '../../utils/levelAssesment';
import withUser from '../../hoc/withUser.component';
import DropDown from '../dropdown/dropdown.component';
import useClickInside from '../../helpers/useClickInside.hook';
import useClickOutside from '../../helpers/useClickOutside.hook';
import useScroll from '../../helpers/useScroll.hook';

const Header = ({ currentUser }) => {
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
  useScroll(setHideBottomNav);

  const [dropdown, setDropdown] = useState({
    userButton: false,
  });

  const dropDownRef = useRef();

  useClickInside(dropDownRef, () =>
    setDropdown({
      userButton: !dropdown.userButton,
    }),
  );

  useClickOutside(dropDownRef, () =>
    setDropdown({
      userButton: false,
    }),
  );

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
            <CustomButton {...userButtonProps} ref={dropDownRef}>
              {currentUser ? null : <S.HeaderLogin> وارد شوید </S.HeaderLogin>}
              <UserIcon />
              <DropDown $show={dropdown.userButton}>this is dropdown</DropDown>
            </CustomButton>
          </S.HeaderButtonsContainer>
        </S.HeaderTop>
        <HeaderNav />
      </Wrapper>
    </S.Header>
  );
};

export default withUser(Header);
