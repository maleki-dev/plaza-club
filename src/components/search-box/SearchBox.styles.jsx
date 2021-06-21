import styled from 'styled-components';

export const SearchBox = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  border: ${({ theme }) => theme.border.solidStroke};
  height: ${({ theme }) => theme.pxToRem(40)};
  max-width: ${({ theme }) => theme.pxToRem(661)};
  padding: ${({ theme }) => theme.pxToRem(12) + ' ' + theme.pxToRem(16)};
`;

export const SearchInput = styled.input`
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  margin-left: ${({ theme }) => theme.pxToRem(16)};
  border: none;
  border-left: ${({ theme }) => theme.border.solidStroke};
`;

export const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
