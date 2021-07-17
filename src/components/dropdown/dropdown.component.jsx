import React from 'react';
import * as S from './dropdown.styles';

const DropDown = React.forwardRef(({ children, ...otherProps }, ref) => {
  return (
    <S.Container {...otherProps} ref={ref}>
      {children}
    </S.Container>
  );
});

export default DropDown;
