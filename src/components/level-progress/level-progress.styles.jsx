import styled, { css } from 'styled-components/macro';
import { levelsData } from '../../global-data';
import { forwardRef } from 'react';

const ForwardRefComponent = forwardRef((props, ref) => <div {...props} ref={ref} />);

const { green, silver, gold, diamond } = levelsData;

const stripStyles = css`
  position: absolute;
  left: 0;
  top: 0;
  height: ${({ theme }) => theme.pxToRem(10)};
  border-radius: ${({ theme }) => theme.pxToRem(5)};
`;

export const Container = styled.div`
  padding: ${({ theme }) => theme.pxToRem('-8 0 32')};
`;

export const Title = styled.h4`
  margin-bottom: ${({ theme }) => theme.pxToRem(40)}; ;
`;

export const StripContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StripBadges = styled.div`
  font: ${({ theme }) => theme.fonts.xsNormal};
  position: relative;
  height: ${({ theme }) => theme.pxToRem(16)};
  margin: ${({ theme }) => theme.pxToRem('6 0')};
  width: 100%;
`;

export const MainStrip = styled(ForwardRefComponent)`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.pxToRem(10)};
  border-radius: ${({ theme }) => theme.pxToRem(5)};
  background-color: ${({ theme }) => theme.color.unselected};
`;

export const BaseGreenStrip = styled.div`
  width: 86%;
  z-index: 10;
  background-color: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.boxShadow.insetStroke};
  ${stripStyles}
`;

export const BaseSilverStrip = styled.div`
  width: 93%;
  z-index: 9;
  background-color: ${({ theme }) => theme.color.stroke};
  ${stripStyles}
`;

export const BaseGoldStrip = styled.div`
  width: 100%;
  z-index: 8;
  background-color: transparent;
  ${stripStyles}
`;

export const GreenStrip = styled(ForwardRefComponent)`
  width: ${({ width }) => width + '%'};
  z-index: 10;
  background-color: ${({ theme }) => theme.color[green.color]};
  ${stripStyles}
`;

export const SilverStrip = styled(ForwardRefComponent)`
  width: ${({ width }) => width + '%'};
  z-index: 10;
  background-color: ${({ theme }) => theme.color[silver.color]};
  ${stripStyles}
`;

export const GoldStrip = styled(ForwardRefComponent)`
  width: ${({ width }) => width + '%'};
  z-index: 10;
  background-color: ${({ theme }) => theme.color[gold.color]};
  ${stripStyles}
`;

export const DiamondStrip = styled(ForwardRefComponent)`
  width: 100%;
  z-index: 11;
  background-color: ${({ theme }) => theme.color[diamond.color]};
  ${stripStyles}
`;

export const Badge = styled.span`
  position: absolute;
  right: ${props => props.right + '%'};
`;
