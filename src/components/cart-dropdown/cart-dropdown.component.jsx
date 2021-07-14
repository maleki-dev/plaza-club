import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import NavItem from '../nav-item/nav-item.component';
import * as S from './cart-dropdown.styles';

const CartDropdown = () => {
  return (
    <React.Fragment>
      <S.Header>
        {`تعداد ${5} کالا در سبد خرید شما`}
        <S.HeaderButton>
          <NavItem to="/club" $hoverBlue={true}>
            نمایش بیشتر
          </NavItem>
        </S.HeaderButton>
      </S.Header>
      <S.Body>سبد خرید</S.Body>
    </React.Fragment>
  );
};

export default CartDropdown;
