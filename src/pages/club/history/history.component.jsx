import React from 'react';
import * as S from './history.styles';
import ScoreTable from '../../../components/club-contents/score-table/score-table.component';
import ScoreEmpty from '../../../components/club-contents/score-empty/score-empty.component';
import data from './history.data';

const History = () => {
  return (
    <S.Container>
      <S.TitleBox>تاریخچه امتیازات</S.TitleBox>
      {data.find(item => item.id) ? <ScoreTable /> : <ScoreEmpty />}
    </S.Container>
  );
};

export default History;
