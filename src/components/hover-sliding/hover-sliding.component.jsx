import React from 'react';
import * as S from './hover-sliding.styles';
import Arrow from '../arrow/arrow.component';

const HoverSliding = ({ children }) => {
  return (
    <S.Container>
      <S.Before>
        <Arrow direction="left" fill="primary" />
      </S.Before>
      {children}
      <S.After>
        <Arrow direction="left" fill="unselected" />
      </S.After>
    </S.Container>
  );
};

export default HoverSliding;
