import styled from 'styled-components';

export const ClubPageContainer = styled.section`
  padding: ${({ theme }) => theme.pxToRem('32 16 0')};
`;

export const RowTitle = styled.p`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
  gap: ${({ theme }) => theme.pxToRem(32)};
`;
