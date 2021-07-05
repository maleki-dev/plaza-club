import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.pxToRem(16)};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $active }) => ($active ? 'default' : 'pointer')};
  width: ${({ theme }) => theme.pxToRem(40)};
  height: ${({ theme }) => theme.pxToRem(40)};
  margin: ${({ theme }) => theme.pxToRem('0 8')};
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  background-color: ${({ theme, $active }) => ($active ? theme.color.primary : 'transparent')};
  color: ${({ theme, $active }) => ($active ? theme.color.background : theme.color.onSurface)};
`;
