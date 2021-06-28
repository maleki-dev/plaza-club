import React from 'react';
import * as S from './club.styles';
import ClubHeader from './club-header/club-header.component';
import UserDashboard from '../../components/dashboard-preview/dashboard-preview.component';
import Banner from '../../components/banner/banner.component';
import WidgetBox from './widget-box/widget-box.component';
import ProductCard from '../../components/product-card/product-card.component';

import productData from './prduct-data';

const ClubPage = () => {
  return (
    <div>
      <ClubHeader />
      <S.ClubPageContainer>
        <S.Row>
          <UserDashboard />
          <Banner />
          <WidgetBox />
        </S.Row>
        <S.RowTitle>پر امتیاز ترین کالاهای مورد علاقه شما</S.RowTitle>
        <S.Row>
          {productData.map(product => {
            const { id, ...otherProps } = product;
            return <ProductCard key={id} {...otherProps} />;
          })}
        </S.Row>
      </S.ClubPageContainer>
    </div>
  );
};

export default ClubPage;
