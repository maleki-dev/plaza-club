import React, { useState, useContext, useEffect } from 'react';
import NavItem from '../../nav-item/nav-item.component';
import * as S from './slide-down.styles';
import Arrow from '../../arrow/arrow.component';
import { MenuContext } from '../../../providers/menu.provider';
import { shallowEqual } from '../../../utils/compareObjects';

const SlideDown = ({ children, $title, $parentId, ...otherProps }) => {
  const { parent, child, setParent, setChild } = useContext(MenuContext);
  const [show, setShow] = useState(false);

  console.log({ parent, child, otherProps });
  const clickHandler = () => {
    if (otherProps.$childIndex !== undefined) {
      // console.log(otherProps.$childIndex);
      setChild({
        parentId: $parentId,
        childId: otherProps.$childIndex,
      });
      setShow(!show);
    } else {
      setChild({
        parentId: null,
        childId: null,
      });
      setParent({ parentId: $parentId });
      setShow(!show);
    }
  };

  useEffect(() => {
    if (otherProps.$childIndex !== undefined) {
      !shallowEqual(child, { parentId: $parentId, childId: otherProps.$childIndex }) &&
        setShow(false);
    } else {
      parent.parentId !== $parentId && setShow(false);
    }
  }, [parent, child]);

  const itemProps = {
    before: <Arrow direction={show ? null : 'left'} fill={show ? 'primary' : 'onSurface'} />,
    $gap: '16',
    onClick: clickHandler, //setShow(!show),
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
