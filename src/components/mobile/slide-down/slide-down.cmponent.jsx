import React, { useState } from 'react';
import NavItem from '../../nav-item/nav-item.component';
import * as S from './slide-down.styles';
import Arrow from '../../arrow/arrow.component';

const SlideDown = ({ children, $title }) => {
  const [show, setShow] = useState(false);

  const itemProps = {
    before: <Arrow direction={show ? null : 'left'} fill={show ? 'primary' : 'onSurface'} />,
    $gap: '16',
    onClick: () => setShow(!show),
    notlink: true,
  };

  return (
    <S.Container>
      <NavItem {...itemProps}>{$title}</NavItem>
      <S.Content $show={show}>{children}</S.Content>
    </S.Container>
  );
};

export default SlideDown;
