import React, { useState } from 'react';
import * as S from './teammate-table.styles';
import { teammates, tableHeadData } from '../../../pages/club/teammates/teammates.data';
import TableHead from '../tabel-head/table-head.component';
import { Table, Body, Row, Cell } from '../../table/table.styles';
import getBadge from '../../../utils/getBadge';
import CustomButton from '../../custom-button/custom-button.component';
import { ReactComponent as RemoveUserIcon } from '../../../assets/images/svg/user.svg';
import Modal from '../../modal/modal.component';
import useModal from '../../../helpers/useModal.hook';

const TeammateTable = () => {
  const [isShowing, toggle] = useModal();
  const [username, setUsername] = useState('');

  const removeUser = name => {
    setUsername(name);
    toggle();
  };

  return (
    <>
      <TableHead data={tableHeadData} />
      <Table>
        <Body>
          {teammates.map(row => {
            const { id, name, timeIn, status } = row;
            return (
              <Row key={id}>
                <Cell $span="2">{name}</Cell>
                <Cell $span="3">
                  <S.Info>
                    {row.email ? <S.Subtitle>{row.email}</S.Subtitle> : null}
                    {row.mobile ? <S.Subtitle>{row.mobile}</S.Subtitle> : null}
                  </S.Info>
                </Cell>
                <Cell $span="2">{timeIn}</Cell>
                <Cell $span="3">
                  <S.RemoveUser>
                    {getBadge(status)}
                    <CustomButton $link={true} $size="small" onClick={() => removeUser(name)}>
                      <RemoveUserIcon />
                    </CustomButton>
                  </S.RemoveUser>
                </Cell>
              </Row>
            );
          })}
        </Body>
      </Table>
      <Modal isShowing={isShowing}>
        <span>
          آیا می‌خواهید <S.RemveUserName>{username}</S.RemveUserName> را از هم خرید های خود حذف
          کنید؟
        </span>
        <S.ButtonGroup>
          <CustomButton $size="mediumWide" $link={true} onClick={toggle}>
            نه دستم خورد
          </CustomButton>
          <CustomButton $size="mediumWide" $color="background">
            بله مطمئن هستم
          </CustomButton>
        </S.ButtonGroup>
      </Modal>
    </>
  );
};

export default TeammateTable;
