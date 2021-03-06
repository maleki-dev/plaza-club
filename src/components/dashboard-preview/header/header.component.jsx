import React from 'react';
import * as S from './header.styles';
import CustomButton from '../../custom-button/custom-button.component';
import { ReactComponent as UserIcon } from '../../../assets/images/svg/__user.svg';
import levelAssesment from '../../../utils/levelAssesment';
import withUser from '../../../hoc/withUser.component';

const DashboardHeader = ({ currentUser }) => {
  const { displayName, score } = currentUser;
  const { color, levelName } = levelAssesment(score);
  return (
    <S.Header>
      <S.HeaderUserIcon $color={color}>
        <UserIcon />
      </S.HeaderUserIcon>
      <S.HeaderUserDetails>
        <S.HeaderUserName>{displayName}</S.HeaderUserName>
        <S.HeaderUserLevel>
          <span>سطح شما: </span>
          <S.HeaderUserLevelColor color={color}>{levelName}</S.HeaderUserLevelColor>
          <CustomButton $size="small" $color="background">
            افزایش سطح
          </CustomButton>
        </S.HeaderUserLevel>
      </S.HeaderUserDetails>
    </S.Header>
  );
};

export default withUser(DashboardHeader);
