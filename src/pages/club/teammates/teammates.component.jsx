import React from 'react';
import * as S from './teammates.styles';

import SideInfo from '../../../components/club-contents/side-info/side-info.component';
import WidgetBox from '../../../components/club-contents/widget-box/widget-box.component';
import { widgetBoxData, teammates } from './teammates.data';
import TeammateTable from '../../../components/club-contents/teammate-table/teammate-table.component';

const confirmedTeammates = teammates.reduce(
  (acc, item) => (item.status === 'confirmed' ? ++acc : acc),
  0,
);

const Teammates = () => {
  return (
    <S.Container>
      <S.Main>
        <S.TitleBox>
          <h4>مشاهده‌ی هم‌خریدها</h4>
          <S.Subtitle>
            <span>{confirmedTeammates}</span>/10 هم‌خرید
          </S.Subtitle>
        </S.TitleBox>
        <TeammateTable />
      </S.Main>
      <S.Side>
        <WidgetBox data={widgetBoxData} />
        <SideInfo />
      </S.Side>
    </S.Container>
  );
};

export default Teammates;
