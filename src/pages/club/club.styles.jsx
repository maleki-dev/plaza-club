import styled from 'styled-components';

export const ClubPageContainer = styled.section`
  padding: ${({ theme }) => theme.pxToRem(32) + ' ' + theme.pxToRem(16)};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
