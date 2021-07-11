import React from 'react';
import * as S from './page404.styles';
import Wrapper from '../../components/wrapper/wrapper.component';

const Page404 = () => {
  return (
    <Wrapper>
      <S.Container>
        <h1>404</h1>
        <h5>صفحه مورد نظر یافت نشد</h5>
        <S.Back></S.Back>
      </S.Container>
    </Wrapper>
  );
};

export default Page404;
