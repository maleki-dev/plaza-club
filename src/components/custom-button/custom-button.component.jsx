import React from 'react';
import * as S from './custom-button.styles';

const CustomButton = props => {
  const { children, ...otherProps } = props;
  return (
    <S.ButtonContainer {...otherProps}>
      <S.ButtonInner>{children}</S.ButtonInner>
    </S.ButtonContainer>
  );
};

export default CustomButton;
//    const {color, size, href, children, onClick} = props
