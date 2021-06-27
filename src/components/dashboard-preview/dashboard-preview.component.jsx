import React from 'react';
import * as S from './dashboard-preview.styles';
import CustomButton from '../custom-button/custom-button.component';
import NavItem from '../nav-item/nav-item.component';
import { userData, levelsData } from '../../global-data';
import menuData from './dashboard-menu-data';
import { ReactComponent as UserIcon } from '../../assets/images/svg/__user.svg';

const { level, point, name } = userData;
const { color, levelName, maxPoint } = levelsData[level];

const UserDashboard = () => {
  return (
    <S.Container>
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
      <S.Content>
        {menuData.map(menuItem => (
          <NavItem
            key={menuItem.id}
            to={menuItem.href}
            color={menuItem.fill}
            before={menuItem.icon}
          >
            {menuItem.title}
          </NavItem>
        ))}
        <S.PointsRange width={(point * 100) / maxPoint}>
          <span>{maxPoint.toLocaleString()}</span>
          <span>0</span>
        </S.PointsRange>
        <S.PointsContainer>
          <span>امتیاز شما: </span>
          <div>
            <S.MaxPoint>{maxPoint.toLocaleString() + ' / '}</S.MaxPoint>
            <S.UserPoint>{point.toLocaleString()}</S.UserPoint>
          </div>
        </S.PointsContainer>
      </S.Content>
    </S.Container>
  );
};

export default UserDashboard;
