import React, { useState, useRef, useEffect } from 'react';
import CustomInput from '../../../components/custom-input/custom-input.component';
import * as S from '../../../layouts/auth/auth.styles';
import CustomButton from '../../../components/custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, userLogin } from '../../../redux/user/user.actions';
import { v4 as idGenerator } from 'uuid';

const SignUp = ({ history }) => {
  const dispatch = useDispatch();
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

    setUserData({
      id: idGenerator(),
      email,
      password,
      displayName: 'سجاد ملکی',
      score: 40000,
    });

    emailRef.current.value = '';
    passRef.current.value = '';
  };

  useEffect(() => {
    if (userData.id) {
      dispatch(addUser(userData));
      dispatch(userLogin(userData));
      history.push('/');
    }
  }, [userData]);

  return (
    <>
      <S.TextContainer>
        <h3>لطفا عضو شوید</h3>
        <span>
          قبلا عضو شدی؟! همین حالا <S.BlueLink to="/auth/sign-in">وارد شو</S.BlueLink>
        </span>
      </S.TextContainer>
      <S.FormContainer>
        <CustomInput ref={emailRef} $placeholder="ایمیل" />
        <CustomInput $type="password" ref={passRef} $placeholder="کلمه عبور" />
      </S.FormContainer>
      <p>
        <S.BlueLink to="./">{` حریم خصوصی `}</S.BlueLink>و
        <S.BlueLink to="./">{` شرایط و قوانین `}</S.BlueLink>
        استفاده از سرویس های سایت پلازا را مطالعه کرده و با کلیه موارد آن موافقم
      </p>
      <S.ButtonContainer>
        <CustomButton $size="mediumWide" $color="primary" onClick={clickHandler}>
          ثبت‌نام در سایت
        </CustomButton>
      </S.ButtonContainer>
    </>
  );
};

export default withRouter(SignUp);
