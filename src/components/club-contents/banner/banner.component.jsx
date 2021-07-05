import React from 'react';
import * as S from './banner.styles';
import clubLogo from '../../../assets/images/club.png';

const Banner = () => {
  return (
    <S.Container>
      <S.Heading>
        <S.HeadingLogo>
          <img src={clubLogo} alt="logo" />
        </S.HeadingLogo>
        <S.HeadingInner>
          <S.HeadingTitle>باهم سود کنیم!</S.HeadingTitle>
          <S.HeadingSubtitle>
            خرید بیشتر، امتیاز بیشتر، سطح کاربری بالاتر و تخفیف بیشتر
          </S.HeadingSubtitle>
        </S.HeadingInner>
      </S.Heading>
    </S.Container>
  );
};

export default Banner;
