import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  padding-bottom: ${({ theme }) => theme.pxToRem(32)};
`;
