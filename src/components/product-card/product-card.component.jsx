import React from 'react';
import Widget from '../widget/widget.component';
import CustomButton from '../custom-button/custom-button.component';
import * as S from './product-card.styles';

const Header = () => {
  return <div></div>;
};

const Footer = () => {
  return <div></div>;
};

const ProductCard = ({ children }) => {
  return (
    <Widget $header={<Header />} $footer={<Footer />}>
      {children}
    </Widget>
  );
};

export default ProductCard;
