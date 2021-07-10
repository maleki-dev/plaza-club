import React from 'react';
import * as S from './auth.styles';

const AuthLayout = ({ children }) => {
  return (
    <S.Container>
      <S.Box>
        <S.Head>
          <img src="/images/logo.png" alt="logo" />
        </S.Head>
        <S.Body>{children}</S.Body>
      </S.Box>
    </S.Container>
  );
};

export default AuthLayout;
