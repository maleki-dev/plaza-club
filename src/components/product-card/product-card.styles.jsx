import styled from 'styled-components';

export const ProductImage = styled.div`
  padding: ${({ theme }) => theme.pxToRem('0 46')};
`;

export const ImageContainer = styled.div`
  position: relative;
  padding-top: 100%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const ProductName = styled.p`
  margin: ${({ theme }) => theme.pxToRem('24 0')};
  max-height: ${({ theme }) => theme.pxToRem('42')};
  flex-grow: 1;
  overflow: hidden;
`;

export const ProductPoint = styled.p`
  margin: ${({ theme }) => theme.pxToRem('8 0')};
  color: ${({ theme }) => theme.color.subtitle};
`;

export const Details = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.pxToRem(24)};
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceOld = styled.del`
  font: ${({ theme }) => theme.fonts.xsNormal};
  color: ${({ theme }) => theme.color.subtitle};
`;

export const PriceNew = styled.span`
  font: ${({ theme }) => theme.fonts.lgBold};
  color: ${({ theme }) => theme.color.primary};
`;
