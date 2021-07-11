import React from 'react';
import * as S from './dropdown.styles';

const DropDown = ({ children, ...otherProps }) => {
  return <S.Container {...otherProps}>{children}</S.Container>;
};

export default DropDown;
