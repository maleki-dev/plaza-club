import React from 'react';
import * as S from './home.styles';

const Home = () => (
  <S.Container>
    <S.Heading>صفحه اصلی</S.Heading>
    <S.Goto to="/club"> {'-->'} باشگاه مشتریان</S.Goto>
  </S.Container>
);
export default Home;
