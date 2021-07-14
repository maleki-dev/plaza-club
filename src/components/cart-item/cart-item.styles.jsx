import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  text-align: right;
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

export const ItemName = styled.div`
  margin-bottom: ${({ theme }) => theme.pxToRem(4)};
  font: ${({ theme }) => theme.fonts.mdBold};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ItemDetails = styled.div`
  margin-bottom: ${({ theme }) => theme.pxToRem(8)};
  font: ${({ theme }) => theme.fonts.smNormal};
`;
