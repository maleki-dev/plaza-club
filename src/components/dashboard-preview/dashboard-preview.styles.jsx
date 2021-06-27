import styled from 'styled-components';

export const Content = styled.div`
  padding: ${({ theme }) => theme.pxToRem(24) + ' ' + theme.pxToRem(32)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.pxToRem(24)};
`;
