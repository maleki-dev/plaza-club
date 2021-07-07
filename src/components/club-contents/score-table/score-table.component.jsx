import React, { useState } from 'react';
import { Table, Body, Row, Cell } from '../../table/table.styles';
import * as S from './score-table.styles';
import { historyData, tableHeadData } from '../../../pages/club/history/history.data';
import CustomButton from '../../custom-button/custom-button.component';
import Pagination from '../../pagination/pagination.component';
import ScoreTableHead from '../tabel-head/table-head.component';

import getBadge from '../../../utils/getBadge';

const ScoreTable = () => {
  const itemsCount = 9;
  const totalPages = Math.ceil(historyData.length / itemsCount);
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
      <ScoreTableHead data={tableHeadData} />
      <Table>
        <Body>
          {historyData.slice(getStart(), getStart() + itemsCount).map(row => {
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
