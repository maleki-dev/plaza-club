import React, { forwardRef } from 'react';
import * as S from './tooltip.styles';

const Tooltip = forwardRef(({ children, text, ...otherProps }, ref) => {
  return (
    <S.Container ref={ref}>
      {children}
      <S.Tooltip {...otherProps}>{text} </S.Tooltip>
    </S.Container>
  );
});

export default Tooltip;
