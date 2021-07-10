import React from 'react';
import * as S from './home.styles';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/user/user.actions';
import CustomButton from '../../components/custom-button/custom-button.component';

const Home = ({ history }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

  const logoutClickHandler = e => {
    e.preventDefault();
    dispatch(userLogout());
  };

  const loginClickHandler = e => {
    e.preventDefault();
    history.push('/auth/sign-in');
  };

  return (
    <S.Container>
      <S.Heading>صفحه اصلی</S.Heading>
      <S.Goto to="/club"> {'-->'} باشگاه مشتریان</S.Goto>
      {currentUser ? (
        <CustomButton $size="medium" $color="secondary" onClick={logoutClickHandler}>
          خروج
        </CustomButton>
      ) : (
        <CustomButton $size="medium" $color="secondary" onClick={loginClickHandler}>
          ورود
        </CustomButton>
      )}
    </S.Container>
  );
};
export default withRouter(Home);
