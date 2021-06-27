import React from 'react';
import * as S from './club.styles';
import ClubHeader from './club-header/club-header.component';
import UserDashboard from '../../components/dashboard-preview/dashboard-preview.component';
import Banner from '../../components/banner/banner.component';
import Widget from '../../components/widget/widget.component';

const ClubPage = () => {
  return (
    <div>
      <ClubHeader />
      <S.ClubPageContainer>
        <S.Row>
          <UserDashboard />
          <Banner />
          <Widget></Widget>
        </S.Row>
      </S.ClubPageContainer>
    </div>
  );
};

export default ClubPage;
