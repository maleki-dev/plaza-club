import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './custom-button.styles';

const CustomButton = props => {
  const { children, ...otherProps } = props;
  const href = otherProps.$href || null;
  return (
    <S.ButtonContainer {...otherProps}>
      <S.ButtonInner as={href ? Link : 'div'} $fill={otherProps.$fill || null} to={href || null}>
        {children}
      </S.ButtonInner>
    </S.ButtonContainer>
  );
};

export default CustomButton;
//    const {color, size, href, children, onClick} = props
