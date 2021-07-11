import React from 'react';
import ClubHeader from '../../components/club-contents/header/header.component';
import UserDashboard from '../../components/dashboard-preview/dashboard-preview.component';
import * as S from '../../pages/club/club.styles';
import { useSelector } from 'react-redux';
import Wrapper from '../../components/wrapper/wrapper.component';
import withUser from '../../hoc/withUser.component';

const ClubLayout = props => {
  const currentUser = useSelector(state => state.user.currentUser);
  console.log(props);
  return (
    <S.ClubPageContainer>
      <S.Header>
        <Wrapper>
          <ClubHeader />
        </Wrapper>
      </S.Header>
      <Wrapper>
        <S.Container>
          {currentUser ? (
            <>
              <UserDashboard />
              <S.Content>{props.children}</S.Content>
            </>
          ) : (
            <p>برای استفاده از خدمات باشگاه مشتریان باید وارد شوید...</p>
          )}
        </S.Container>
      </Wrapper>
    </S.ClubPageContainer>
  );
};

export default withUser(ClubLayout);
