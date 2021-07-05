import React, { useState } from 'react';
import { Table, Body, Row, Cell } from '../../table/table.styles';
import * as S from './score-table.styles';
import data from '../../../pages/club/history/history.data';
import Badge from '../../badge/badge.component';
import CustomButton from '../../custom-button/custom-button.component';
import Pagination from '../../pagination/pagination.component';
import ScoreTableHead from '../tabel-head/table-head.component';

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
  const itemsCount = 9;
  const totalPages = Math.ceil(data.length / itemsCount);
  const [currentPage, setCurrentPage] = useState(1);

  const getStart = () => (currentPage - 1) * itemsCount;

  const paginationHandleClick = page => {
    setCurrentPage(page);
  };

  const onChange = page => {
    setCurrentPage(page);
  };

  return (
    <>
      <ScoreTableHead />
      <Table>
        <Body>
          {data.slice(getStart(), getStart() + itemsCount).map(row => {
            const { id, value, type, title, bonus, status } = row;
            return (
              <Row key={id}>
                <Cell $span="1">
                  <S.Value $type={type}>{value + (type === 'inc' ? '+' : '-')}</S.Value>
                </Cell>
                <Cell $span="2.3">
                  <S.Title>
                    {title}
                    {row.sub ? <S.Subtitle>{row.sub}</S.Subtitle> : null}
                  </S.Title>
                </Cell>
                <Cell $span="1.7">{bonus === null ? 'ندارد' : bonus + '+'}</Cell>
                <Cell $span="3">
                  {status.date} {getBadge(status.condition)}
                </Cell>
                <Cell $span="2">
                  <S.Details>
                    {row.details ? (
                      <CustomButton $size="medium" $color="background">
                        مشاهده جزئیات
                      </CustomButton>
                    ) : null}
                  </S.Details>
                </Cell>
              </Row>
            );
          })}
        </Body>
      </Table>
      <Pagination
        $totalPages={totalPages}
        $currentPage={currentPage}
        $onClick={paginationHandleClick}
        $onChange={onChange}
      />
    </>
  );
};

export default ScoreTable;
