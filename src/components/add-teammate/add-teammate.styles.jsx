import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(24)};
`;

export const ButtonGroup = styled.form`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;
