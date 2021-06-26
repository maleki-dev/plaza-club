import React from 'react';
import * as S from './club.styles';
import UserDashboard from '../../components/dashboard-preview/dashboard-preview.component';

const ClubPage = () => {
  return (
    <S.ClubPageContainer>
      <UserDashboard />
    </S.ClubPageContainer>
  );
};

export default ClubPage;
