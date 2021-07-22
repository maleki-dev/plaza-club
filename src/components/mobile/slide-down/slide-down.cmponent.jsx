import React, { useState, useContext, useEffect } from 'react';
import NavItem from '../../nav-item/nav-item.component';
import * as S from './slide-down.styles';
import Arrow from '../../arrow/arrow.component';
import { MenuContext } from '../../../providers/menu.provider';
import { shallowEqual } from '../../../utils/compareObjects';

const SlideDown = ({ children, $title, $parentId, deep, ...otherProps }) => {
  const { parent, setParent, child, setChild } = useContext(MenuContext);
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    if (otherProps.$childId !== undefined) {
      setChild({
        deep: deep,
        parentId: $parentId,
        childId: otherProps.$childId,
      });
      setShow(!show);
    } else {
      setChild({
        deep: null,
        parentId: null,
        childId: null,
      });
      setParent({ parentId: $parentId });
      setShow(!show);
    }
  };

  useEffect(() => {
    parent.parentId !== $parentId && setShow(false);
  }, [parent]);

  useEffect(() => {
    if (otherProps.$childId !== undefined) {
      if (!shallowEqual(child, { parentId: $parentId, childId: otherProps.$childId, deep }))
        setShow(false);
      if (child.parentId === otherProps.$childId) setShow(true);
    }
  }, [child]);

  const itemProps = {
    before: <Arrow direction={show ? null : 'left'} fill={show ? 'primary' : 'onSurface'} />,
    $gap: '16',
    onClick: clickHandler,
    notlink: true,
  };

  return (
    <S.Container>
      <NavItem {...itemProps}>{$title}</NavItem>
      <S.DropDown $show={show}>
        <S.Content {...otherProps}>{children}</S.Content>
      </S.DropDown>
    </S.Container>
  );
};

export default SlideDown;
