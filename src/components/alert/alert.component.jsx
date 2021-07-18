import React from 'react';
import * as S from './alert.styles';
import { ReactComponent as Danger } from '../../assets/images/svg/alert.svg';

const Alert = ({ children, ...otherProps }) => {
  return (
    <S.Wrapper>
      <S.Back {...otherProps} />
      <S.Container>
        <Danger />
        <S.Message>{children}</S.Message>
      </S.Container>
    </S.Wrapper>
  );
};

export default Alert;
