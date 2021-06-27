import styled from 'styled-components';

export const ClubPageContainer = styled.section`
  padding: ${({ theme }) => theme.pxToRem('32 16')};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.pxToRem(32)};
`;
