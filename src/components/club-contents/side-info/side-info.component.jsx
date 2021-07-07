import React from 'react';
import { sideInfo } from '../../../pages/club/teammates/teammates.data';
import * as S from './side-info.styles';

const SideInfo = () => {
  return (
    <S.SideInfo>
      {sideInfo.map(({ id, count, total, title, subtitle }) => (
        <S.SideInfoItem key={id}>
          <S.SideInfoRight>
            <S.SideInfoRightSub>{total}</S.SideInfoRightSub>/
            <S.SideInfoRightBold>{count}</S.SideInfoRightBold>
          </S.SideInfoRight>
          <S.SideInfoLeft>
            <S.SideInfoLeftTop>{title}</S.SideInfoLeftTop>
            <S.SideInfoLeftSub>{subtitle}</S.SideInfoLeftSub>
          </S.SideInfoLeft>
        </S.SideInfoItem>
      ))}
    </S.SideInfo>
  );
};

export default SideInfo;
