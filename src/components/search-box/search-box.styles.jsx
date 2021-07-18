import styled from 'styled-components/macro';

export const SearchBoxContainer = styled.div`
  position: relative;
  display: flex;
`;

export const SearchBox = styled.div`
  display: flex;
  position: relative;
  border-radius: ${({ theme }) => theme.pxToRem(24)};
  background-color: ${({ theme }) => theme.color.newBackground};
  height: ${({ theme }) => theme.pxToRem(48)};
  max-width: ${({ theme }) => theme.pxToRem(661)};
  padding: ${({ theme }) => theme.pxToRem('10 16')};
  z-index: 100;
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.color.newBackground};
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  margin-left: ${({ theme }) => theme.pxToRem(16)};
  border: none;
  border-left: ${({ theme }) => theme.border.solidStroke};
  width: ${({ theme }) => theme.pxToRem(1000)};
  font: ${({ theme }) => theme.fonts.smNormal};
`;

export const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SearchBoxContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 99;
  padding: ${({ theme }) => theme.pxToRem('48 0 24')};
  background-color: ${({ theme }) => theme.color.background};
  font: ${({ theme }) => theme.fonts.mdNormal};
  border-radius: ${({ theme }) => theme.pxToRem(24)};
  box-shadow: ${({ theme }) => theme.boxShadow.outsetBlackLighter};
`;
