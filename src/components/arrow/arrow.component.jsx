import React from 'react';
import { ArrowContainer } from './arrow.styles';
import { ReactComponent as ArrowSvg } from '../../assets/images/svg/__arrow.svg';

const Arrow = props => (
  <ArrowContainer {...props}>
    <ArrowSvg />
  </ArrowContainer>
);

export default Arrow;
