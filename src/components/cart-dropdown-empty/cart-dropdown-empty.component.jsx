import React from 'react';
import * as S from './cart-dropdown-empty.styles';
import { ReactComponent as EmptyCart } from '../../assets/images/svg/__shape.svg';

const EmptyCartDropdown = () => {
  return (
    <S.Container>
      <EmptyCart />
      سبد خرید شما خالی است
    </S.Container>
  );
};

export default EmptyCartDropdown;
