import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';

const arrowStyle = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.pxToRem(40)};
  height: ${({ theme }) => theme.pxToRem(40)};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.background};
  fill: ${({ theme }) => theme.color.primary};
  z-index: 2;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    fill: ${({ theme }) => theme.color.background};
  }
`;

export const LeftArrow = styled.div`
  ${arrowStyle}
  left: ${({ theme }) => theme.pxToRem(-40)};
`;

export const RightArrow = styled.div`
  ${arrowStyle}
  right: ${({ theme }) => theme.pxToRem(-40)};
`;

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  &:hover {
    ${LeftArrow} {
      left: ${({ theme }) => theme.pxToRem(16)};
    }
    ${RightArrow} {
      right: ${({ theme }) => theme.pxToRem(16)};
    }
  }
`;

export const Slider = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  transform: ${({ $translate }) => `translateX(${$translate})`};
  transition: transform ${({ $transition }) => $transition}s;
`;

export const SlideItem = styled(Link)`
  display: inline-block;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  padding-top: ${props => props.scale * 100 + '%'};
`;

export const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.pxToRem(16)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const activeIndicatorStyles = css`
  background-color: ${({ theme }) => theme.color.primary};
  transform: scale(1.2);
`;

export const Indicator = styled.div`
  width: ${({ theme }) => theme.pxToRem(10)};
  height: ${({ theme }) => theme.pxToRem(10)};
  margin: ${({ theme }) => theme.pxToRem('0 10')};
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;

  ${props => (props.$active ? activeIndicatorStyles : null)};
`;
