import React, { useState, useRef, useContext } from 'react';
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
import BadgeInButton from '../badge-in-button/badge-in-button.component';
import UserDropdown from '../user-dropdown/user-dropdown.component';
import useClickInside from '../../helpers/useClickInside.hook';
import useClickOutside from '../../helpers/useClickOutside.hook';
import useScroll from '../../helpers/useScroll.hook';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { NavContext } from '../../providers/nav.provider';

const Header = ({ currentUser }) => {
  const cartItemsCount = useSelector(state => selectCartItemsCount(state));

  let color = 'background';

  const cartButtonProps = {
    $color: 'background',
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

  const { showNav } = useContext(NavContext);

  const [hideBottomNav, setHideBottomNav] = useState(false);
  useScroll(setHideBottomNav);

  const [userDropdown, setUserDropdown] = useState(false);
  const [cartDropdown, setCartDropdown] = useState(false);

  const userDropDownRef = useRef();
  const cartDropDownRef = useRef();
  const cartDropDownButtonRef = useRef();
  const userDropDownButtonRef = useRef();

  useClickInside(userDropDownButtonRef, () => setUserDropdown(!userDropdown));
  useClickOutside(userDropDownButtonRef, () => setUserDropdown(false));
  useClickInside(userDropDownRef, () => setUserDropdown(true));
  useClickInside(cartDropDownButtonRef, () => setCartDropdown(!cartDropdown));
  useClickOutside(cartDropDownButtonRef, () => setCartDropdown(false));
  useClickInside(cartDropDownRef, () => setCartDropdown(true));

  return (
    <>
      <S.ScreenOverlay $show={showNav} />
      <S.Header $hideBottomNav={hideBottomNav}>
        <Wrapper>
          <S.HeaderTop $hideBottomNav={hideBottomNav}>
            <S.Logo to="/">
              <img alt="plaza-logo" src={logo} />
            </S.Logo>
            <SearchBox />
            <S.HeaderButtonsContainer>
              <S.HeaderCartButtonContainer>
                <CustomButton {...cartButtonProps} ref={cartDropDownButtonRef}>
                  {cartItemsCount ? <BadgeInButton>{cartItemsCount}</BadgeInButton> : null}
                  <CartIcon />
                </CustomButton>
                <DropDown $show={cartDropdown} ref={cartDropDownRef}>
                  <CartDropdown />
                </DropDown>
              </S.HeaderCartButtonContainer>

              <CustomButton {...userButtonProps} ref={userDropDownButtonRef}>
                {currentUser ? (
                  <DropDown $show={userDropdown} ref={userDropDownRef} $userColor={color}>
                    <UserDropdown />
                  </DropDown>
                ) : (
                  <S.HeaderLogin> وارد شوید </S.HeaderLogin>
                )}
                <UserIcon />
              </CustomButton>
            </S.HeaderButtonsContainer>
          </S.HeaderTop>
          <HeaderNav />
        </Wrapper>
      </S.Header>
    </>
  );
};

export default withUser(Header);
