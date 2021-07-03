import React from 'react';
import * as S from './scoring-box.styles';

const ScoringBox = props => {
  const { icon, title, score } = props;
  return (
    <S.Container>
      <S.Icon>{icon}</S.Icon>
      <S.Title>{title}</S.Title>
      <S.ScoreBox>
        {score ? <S.Score>{score}</S.Score> : null}
        <span>{score ? 'امتیاز' : props.explan}</span>
      </S.ScoreBox>
    </S.Container>
  );
};

export default ScoringBox;
