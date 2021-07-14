import React from 'react';
import * as S from './cart-item.styles';

const CartItem = ({ name, imageUrl, price, details }) => {
  return (
    <S.Container>
      <S.Image src={imageUrl} alt={name} />
      <S.DetailsContainer>
        <S.ItemName>{name}</S.ItemName>
        <S.ItemDetails>{details.join(' - ')}</S.ItemDetails>
      </S.DetailsContainer>
    </S.Container>
  );
};

export default CartItem;
