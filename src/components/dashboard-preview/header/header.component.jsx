import React from 'react';
import * as S from './header.styles';
import CustomButton from '../../custom-button/custom-button.component';
import { ReactComponent as UserIcon } from '../../../assets/images/svg/__user.svg';
import { userData, levelsData } from '../../../global-data';
const { level, name } = userData;
const { color, levelName } = levelsData[level];

const DashboardHeader = () => {
  return (
    <S.Header>
      <S.HeaderUserIcon color={color}>
        <UserIcon />
      </S.HeaderUserIcon>
      <S.HeaderUserDetails>
        <S.HeaderUserName>{name}</S.HeaderUserName>
        <S.HeaderUserLevel>
          <span>سطح شما: </span>
          <S.HeaderUserLevelColor color={color}>{levelName}</S.HeaderUserLevelColor>
          <CustomButton size="small" color="background">
            افزایش سطح
          </CustomButton>
        </S.HeaderUserLevel>
      </S.HeaderUserDetails>
    </S.Header>
  );
};

export default DashboardHeader;
