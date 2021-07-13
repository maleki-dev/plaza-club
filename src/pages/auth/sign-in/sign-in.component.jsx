import React, { useRef, useState, useEffect } from 'react';
import CustomInput from '../../../components/custom-input/custom-input.component';
import * as S from '../../../layouts/auth/auth.styles';
import CustomButton from '../../../components/custom-button/custom-button.component';

import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../../redux/user/user.actions';

const SignIn = ({ history }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const [userData, setUserData] = useState({
    id: null,
    email: null,
    password: null,
  });

  const clickHandler = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    const possibleUser = users.find(user => user.email === email);
    if (possibleUser && possibleUser.password === password) {
      setUserData({
        ...possibleUser,
      });
    }

    emailRef.current.value = '';
    passRef.current.value = '';
  };

  useEffect(() => {
    if (userData.id) {
      dispatch(userLogin(userData));
      history.push('/');
    }
  }, [userData]);

  return (
    <>
      <S.TextContainer>
        <h3>لطفا وارد شوید</h3>
        <span>
          کاربر پلازا نیستی؟! همین حالا <S.BlueLink to="/auth/sign-up">عضو شو</S.BlueLink>
        </span>
      </S.TextContainer>
      <S.FormContainer>
        <CustomInput ref={emailRef} $placeholder="ایمیل" />
        <CustomInput $type="password" ref={passRef} $placeholder="کلمه عبور" />
      </S.FormContainer>
      <S.ButtonContainer>
        <CustomButton $size="mediumWide" $color="primary" onClick={clickHandler}>
          ورود به سایت
        </CustomButton>
      </S.ButtonContainer>
    </>
  );
};

export default withRouter(SignIn);
