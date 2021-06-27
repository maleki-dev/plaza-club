import React from 'react';
import { Container } from './widget.style';

const Widget = ({ header, footer, children }) => {
  return (
    <Container>
      {header}
      {children}
      {footer}
    </Container>
  );
};

export default Widget;
