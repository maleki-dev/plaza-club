import React from 'react';
import * as S from './mini-nav.styles';
import { ReactComponent as Cart } from '../../../assets/images/svg/cart2x.svg';
import { ReactComponent as Profile } from '../../../assets/images/svg/profile.svg';
import { ReactComponent as Diamond } from '../../../assets/images/svg/diamond2x.svg';

const MiniNav = () => {
  return (
    <S.Container>
      <S.Item to="/cart">
        <S.Icon>
          <Cart />
        </S.Icon>
        <span>سفارش من</span>
      </S.Item>
      <S.Item to="/profile">
        <S.Icon>
          <Profile />
        </S.Icon>
        <span>پروفایل من</span>
      </S.Item>
      <S.Item to="/club">
        <S.Icon>
          <Diamond />
        </S.Icon>
        <span>باشگاه من</span>
      </S.Item>
    </S.Container>
  );
};

export default MiniNav;
