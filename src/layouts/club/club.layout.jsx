import React from 'react';
import ClubHeader from '../../components/club-contents/header/header.component';
import UserDashboard from '../../components/dashboard-preview/dashboard-preview.component';
import * as S from '../../pages/club/club.styles';
import { useSelector } from 'react-redux';

const ClubLayout = ({ children }) => {
  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <S.ClubPageContainer>
      <ClubHeader />
      <S.Container>
        {currentUser ? (
          <>
            <UserDashboard />
            <S.Content>{children}</S.Content>
          </>
        ) : (
          <p>برای استفاده از خدمات باشگاه مشتریان باید وارد شوید...</p>
        )}
      </S.Container>
    </S.ClubPageContainer>
  );
};

export default ClubLayout;
