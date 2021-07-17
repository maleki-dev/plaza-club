import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import * as S from './cart-item.styles';
import { ReactComponent as Delete } from '../../assets/images/svg/delete.svg';

const CartItem = props => {
  const { name, imageUrl, price, details, quantity, addItem, removeItem, clearItem } = props;
  return (
    <S.Container>
      <S.Image src={imageUrl} alt={name} />
      <S.Column>
        <S.Row>
          <S.DetailsContainer>
            <S.ItemName>{name}</S.ItemName>
            <S.ItemDetails>{details.join(' - ')}</S.ItemDetails>
          </S.DetailsContainer>
          <CustomButton $size="medium" $link={true} onClick={clearItem}>
            <Delete />
          </CustomButton>
        </S.Row>
        <S.Row>
          <S.PriceBox>
            <S.Price>{price.new.toLocaleString()}</S.Price>تومان
          </S.PriceBox>
          <S.QuantityButtons>
            <S.QuantityButton onClick={addItem}>+</S.QuantityButton>
            {quantity}
            <S.QuantityButton onClick={removeItem}>-</S.QuantityButton>
          </S.QuantityButtons>
        </S.Row>
      </S.Column>
    </S.Container>
  );
};

export default CartItem;
