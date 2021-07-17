import React from 'react';
// import CustomButton from '../custom-button/custom-button.component';
import EmptyCartDropdown from '../cart-dropdown-empty/cart-dropdown-empty.component';
import NavItem from '../nav-item/nav-item.component';
import * as S from './cart-dropdown.styles';
import { useSelector } from 'react-redux';
import { selectCartItems, selectItemsCount } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => selectCartItems(state));
  const totalPrice = useSelector(state => selectItemsCount(state));

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
          {cart.map(item => {
            const { id, ...otherProps } = item;
            return (
              <CartItem
                key={id}
                addItem={() => dispatch(addItem(item))}
                removeItem={() => dispatch(removeItem(item))}
                clearItem={() => dispatch(clearItemFromCart(item))}
                {...otherProps}
              />
            );
          })}
        </S.Body>
        <S.Footer>
          <S.TotalPriceBox>
            مبلغ قابل پرداخت
            <S.TotalPrice> {totalPrice.toLocaleString()} تومان</S.TotalPrice>
          </S.TotalPriceBox>
          <CustomButton $size="mediumWide" $color="primary">
            مشاهده جزئیات
          </CustomButton>
        </S.Footer>
      </React.Fragment>
    );
  } else return <EmptyCartDropdown />;
};

export default CartDropdown;
