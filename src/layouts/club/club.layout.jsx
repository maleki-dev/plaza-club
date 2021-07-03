import React from 'react';
import ClubHeader from '../../pages/club/contents/header/header.component';
import UserDashboard from '../../components/dashboard-preview/dashboard-preview.component';
import * as S from '../../pages/club/club.styles';

const ClubLayout = ({ children }) => {
  return (
    <S.ClubPageContainer>
      <ClubHeader />
      <S.Container>
        <UserDashboard />
        <S.Content>{children}</S.Content>
      </S.Container>
    </S.ClubPageContainer>
  );
};

export default ClubLayout;
