import React from 'react';
// import CustomButton from '../custom-button/custom-button.component';
import EmptyCartDropdown from '../cart-dropdown-empty/cart-dropdown-empty.component';
import NavItem from '../nav-item/nav-item.component';
import * as S from './cart-dropdown.styles';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const cart = useSelector(state => selectCartItems(state));
  if (cart.length) {
    return (
      <React.Fragment>
        <S.Header>
          {`تعداد ${cart.length} کالا در سبد خرید شما`}
          <S.HeaderButton>
            <NavItem to="/club" $hoverBlue={true}>
              نمایش بیشتر
            </NavItem>
          </S.HeaderButton>
        </S.Header>
        <S.Body>
          {cart.map(({ id, ...otherProps }) => (
            <CartItem {...otherProps} />
          ))}
        </S.Body>
      </React.Fragment>
    );
  } else return <EmptyCartDropdown />;
};

export default CartDropdown;
