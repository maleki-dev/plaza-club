import React from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import * as S from './score-empty.styles';

const ScoreEmpty = () => {
  return (
    <S.Container>
      <S.Back />
      <S.Text>
        <h4>تاریخچه‌ی امتیازات شما خالی است!</h4>
        <p>
          با فعالیت در سایت پلازا مانند ثبت نظر، نقد و بررسی کالاهای خریداری شده خرید کالا، تکمیل
          پروفایل و دعوت دوستان می‌توانید امتیازهای خود را افزایش دهید{' '}
        </p>
      </S.Text>
      <CustomButton $size="mediumWide" $color="primary" to="/">
        راهنمای باشگاه مشتریان
      </CustomButton>
    </S.Container>
  );
};

export default ScoreEmpty;
