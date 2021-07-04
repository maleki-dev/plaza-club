import React from 'react';
import { Container } from './badge.styles';

const Badge = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

export default Badge;
