import React from 'react';
import * as S from './footer.styles';
import { userData } from '../../../data';
import levelAssesment from '../../../helpers/levelAssesment';

const { score } = userData;
const { maxScore } = levelAssesment(score);

const DashboardFooter = () => {
  return (
    <S.Footer>
      <S.ScoresRange width={(score * 100) / maxScore}>
        <span>{maxScore.toLocaleString()}</span>
        <span>0</span>
      </S.ScoresRange>
      <S.ScoresContainer>
        <span>امتیاز شما: </span>
        <div>
          <S.MaxScore>{maxScore.toLocaleString() + ' / '}</S.MaxScore>
          <S.UserScore>{score.toLocaleString()}</S.UserScore>
        </div>
      </S.ScoresContainer>
    </S.Footer>
  );
};

export default DashboardFooter;
