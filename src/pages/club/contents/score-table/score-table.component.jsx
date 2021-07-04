import React from 'react';
import * as T from '../../../../components/table/table.styles';
import * as S from './score-table.styles';
import data from '../../history/history.data';
import Badge from '../../../../components/badge/badge.component';
import CustomButton from '../../../../components/custom-button/custom-button.component';

const getBadge = condition => {
  if (condition === 'confirmed') {
    return <Badge $color="success">تایید امتیاز</Badge>;
  } else if (condition === 'unConfirmed') {
    return <Badge $color="error">عدم تایید</Badge>;
  } else if (condition === 'pending') {
    return <Badge $color="background">درحال بررسی</Badge>;
  }
};

const ScoreTable = () => {
  return (
    <T.Table>
      <T.Head>
        <T.Row>
          <T.Cell span="0.8">امتیاز</T.Cell>
          <T.Cell span="2.5">عنوان امتیاز</T.Cell>
          <T.Cell span="2">امتیاز تشویقی</T.Cell>
          <T.Cell span="3">وضعیت</T.Cell>
          <T.Cell span="1.7"></T.Cell>
        </T.Row>
      </T.Head>
      <T.Body>
        {data.map(row => {
          const { id, value, type, title, bonus, status } = row;
          return (
            <T.Row key={id}>
              <T.Cell $span="0.8">
                <S.Value $type={type}>{value + (type === 'inc' ? '+' : '-')}</S.Value>
              </T.Cell>
              <T.Cell $span="2.5">
                <S.Title>
                  {title}
                  {row.sub ? <S.Subtitle>{row.sub}</S.Subtitle> : null}
                </S.Title>
              </T.Cell>
              <T.Cell $span="1.7">{bonus === null ? 'ندارد' : bonus + '+'}</T.Cell>
              <T.Cell $span="3">
                {status.date} {getBadge(status.condition)}
              </T.Cell>
              <T.Cell $span="2">
                <S.Details>
                  {row.details ? (
                    <CustomButton $size="medium" $color="background">
                      مشاهده جزئیات
                    </CustomButton>
                  ) : null}
                </S.Details>
              </T.Cell>
            </T.Row>
          );
        })}
      </T.Body>
    </T.Table>
  );
};

export default ScoreTable;
