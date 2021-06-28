import React from 'react';
import Widget from '../widget/widget.component';
import CustomButton from '../custom-button/custom-button.component';
import * as S from './product-card.styles';

const ProductCard = ({ imageUrl, href, price, name, point }) => {
  return (
    <Widget>
      <S.ProductImage>
        <S.ImageContainer>
          <S.Image src={imageUrl} />
        </S.ImageContainer>
      </S.ProductImage>
      <S.ProductName>{name}</S.ProductName>
      <S.ProductPoint>
        امتیاز خرید: <span>{point}</span>
      </S.ProductPoint>
      <S.Details>
        <CustomButton to={href} color="primary" size="mediumWide">
          مشاهده
        </CustomButton>
        <S.PriceContainer>
          <S.PriceOld>{price.old.toLocaleString()}</S.PriceOld>
          <div>
            <S.PriceNew>{price.new.toLocaleString()}</S.PriceNew>
            <span> تومان</span>
          </div>
        </S.PriceContainer>
      </S.Details>
    </Widget>
  );
};

export default ProductCard;
