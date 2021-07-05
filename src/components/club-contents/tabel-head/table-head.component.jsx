import React from 'react';
import { Table, Head, Row, Cell } from '../../table/table.styles';

const ScoreTableHead = () => {
  return (
    <Table>
      <Head>
        <Row>
          <Cell $span="1">امتیاز</Cell>
          <Cell $span="2.3">عنوان امتیاز</Cell>
          <Cell $span="1.7">امتیاز تشویقی</Cell>
          <Cell $span="3">وضعیت</Cell>
          <Cell $span="2"></Cell>
        </Row>
      </Head>
    </Table>
  );
};

export default ScoreTableHead;
