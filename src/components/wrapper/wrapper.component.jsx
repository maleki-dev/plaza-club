import React from 'react';
import { Container, Inner } from './wrapper.styles';

const Wrapper = ({ children }) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
};

export default Wrapper;
