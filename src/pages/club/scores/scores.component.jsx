import React from 'react';
import * as S from './scores.styles';
import LevelProgress from '../../../components/level-progress/level-progress.component';
import ScoringBox from '../../../components/club-contents/scoring-box/scoring-box.component';
import { scoringData } from '../../../data';

const Scores = () => {
  return (
    <S.Container>
      <LevelProgress />
      <S.Scoring>
        <S.BackImage />
        <S.ScoringWays>
          <S.TitleBox>
            <h4>راه های کسب امتیاز</h4>
            <p>
              ما راه های مختلفی را برایتان فراهم کرده ایم تا بتوانید امتیازهای خود را افزایش دهید
            </p>
          </S.TitleBox>
          <S.ScoringBoxes>
            {scoringData.map(({ id, ...otherProps }) => (
              <ScoringBox key={id} {...otherProps} />
            ))}
          </S.ScoringBoxes>
        </S.ScoringWays>
      </S.Scoring>
    </S.Container>
  );
};

export default Scores;
