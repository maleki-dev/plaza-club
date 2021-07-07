import React from 'react';
import { Table, Head, Row, Cell } from '../../table/table.styles';

const TableHead = ({ data }) => {
  return (
    <Table>
      <Head>
        <Row>
          {data.map(({ id, span, title }) => (
            <Cell key={id} $span={span}>
              {title}
            </Cell>
          ))}
        </Row>
      </Head>
    </Table>
  );
};

export default TableHead;
