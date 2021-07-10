import React from 'react';
import * as S from './add-teammate.styles';
import CustomButton from '../custom-button/custom-button.component';
import CustomInput from '../custom-input/custom-input.component';

const AddTeammate = ({ toggle, action }) => {
  return (
    <>
      <h4>افزودن هم‌خرید جدید</h4>
      <S.Container>
        <CustomInput placeholder="نام و نام خانوادگی" />
        <CustomInput placeholder="آدرس ایمیل یا شماره موبایل" />
        <S.ButtonGroup>
          <CustomButton $size="mediumWide" $link={true} onClick={toggle}>
            انصراف
          </CustomButton>
          <CustomButton $size="mediumWide" $color="background" onClick={action}>
            افزودن
          </CustomButton>
        </S.ButtonGroup>
      </S.Container>
    </>
  );
};

export default AddTeammate;
