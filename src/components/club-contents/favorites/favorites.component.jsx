import React from 'react';
import ProductCard from '../../product-card/product-card.component';
import { RowTitle, Row } from '../../../pages/club/club.styles';
import { productData } from '../../../data';

const Favorites = () => {
  return (
    <section>
      <RowTitle>پر امتیاز ترین کالاهای مورد علاقه شما</RowTitle>
      <Row>
        {productData.map(product => {
          const { id, ...otherProps } = product;
          return <ProductCard key={id} {...otherProps} />;
        })}
      </Row>
    </section>
  );
};

export default Favorites;
