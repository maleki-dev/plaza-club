import React from 'react';
import * as S from './footer.styles';
import levelAssesment from '../../../utils/levelAssesment';
import withUser from '../../../hoc/withUser.component';

const DashboardFooter = ({ currentUser }) => {
  const { score } = currentUser;
  const { maxScore } = levelAssesment(score);
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

export default withUser(DashboardFooter);
