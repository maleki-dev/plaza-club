import React from 'react';
import * as S from './footer.styles';
import { userData, levelsData } from '../../../global-data';

const { level, point } = userData;
const { maxPoint } = levelsData[level];

const DashboardFooter = () => {
  return (
    <S.Footer>
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
    </S.Footer>
  );
};

export default DashboardFooter;
