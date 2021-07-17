import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  text-align: right;
  padding: ${({ theme }) => theme.pxToRem('16 0')};

  &:not(:last-of-type) {
    border-bottom: ${({ theme }) => theme.border.solidStrokeVariant};
  }
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.pxToRem(72)};
  height: ${({ theme }) => theme.pxToRem(72)};
  margin-left: ${({ theme }) => theme.pxToRem(16)};
`;

export const DetailsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.pxToRem(8)};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(8)};
  flex-grow: 1;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;

export const ItemName = styled.div`
  margin-bottom: ${({ theme }) => theme.pxToRem(4)};
  font: ${({ theme }) => theme.fonts.mdBold};
  display: flex;
`;

export const ItemDetails = styled.div`
  font: ${({ theme }) => theme.fonts.smNormal};
`;

export const PriceBox = styled.span`
  font: ${({ theme }) => theme.fonts.smNormalHighLine};
  align-self: flex-end;
`;

export const Price = styled.span`
  font: ${({ theme }) => theme.fonts.mdNormal};
  color: ${({ theme }) => theme.color.primary};
  margin-left: ${({ theme }) => theme.pxToRem(8)};
`;

export const QuantityButtons = styled.div`
  height: ${({ theme }) => theme.pxToRem(32)};
  min-width: ${({ theme }) => theme.pxToRem(96)};
  padding-top: ${({ theme }) => theme.pxToRem(4)};
  border-radius: ${({ theme }) => theme.pxToRem(12)};
  gap: ${({ theme }) => theme.pxToRem(8)};
  border: ${({ theme }) => theme.border.solidStroke};
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

export const QuantityButton = styled.span`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.pxToRem('0 10')};
  cursor: pointer;
`;
