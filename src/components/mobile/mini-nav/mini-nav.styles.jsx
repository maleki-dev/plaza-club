import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.pxToRem('16 0')};
`;

export const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font: ${({ theme }) => theme.fonts.smNormalHighLine};
`;

export const Icon = styled.div`
  width: ${({ theme }) => theme.pxToRem(56)};
  height: ${({ theme }) => theme.pxToRem(56)};
  margin-bottom: ${({ theme }) => theme.pxToRem(8)};
  border-radius: ${({ theme }) => theme.pxToRem(16)};
  background-color: ${({ theme }) => theme.color.newBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`;
