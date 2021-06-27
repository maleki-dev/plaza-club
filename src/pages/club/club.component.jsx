import React from 'react';
import * as S from './club.styles';
import ClubHeader from './club-header/club-header.component';
import UserDashboard from '../../components/dashboard-preview/dashboard-preview.component';

const ClubPage = () => {
  return (
    <div>
      <ClubHeader />
      <S.ClubPageContainer>
        <S.Row>
          <UserDashboard />
        </S.Row>
      </S.ClubPageContainer>
    </div>
  );
};

export default ClubPage;
