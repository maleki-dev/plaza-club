import React from 'react';
import { Container, Header, Footer } from './widget.style';

const Widget = props => {
  const { $header, $footer, children, ...otherProps } = props;
  return (
    <Container>
      <Header>{$header}</Header>
      {children}
      <Footer {...otherProps}>{$footer}</Footer>
    </Container>
  );
};

export default Widget;
