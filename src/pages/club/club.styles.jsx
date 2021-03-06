import styled from 'styled-components/macro';

export const ClubPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: ${({ theme }) => theme.pxToRem('32 16 0')};
  display: flex;
  align-items: flex-start;
`;

export const Header = styled.div`
  border-bottom: ${({ theme }) => theme.border.solidStroke};
`;

export const Content = styled.main`
  flex-basis: 74.5%;
  margin-bottom: ${({ theme }) => theme.pxToRem(32)}; ;
`;

export const RowTitle = styled.p`
  margin: ${({ theme }) => theme.pxToRem('32 0 16')};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
  gap: ${({ theme }) => theme.pxToRem(32)};

  div {
    flex-basis: 31.5%;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 1270px) {
    flex-wrap: wrap;

    div {
      flex-basis: 48%;
    }
  }
`;

export const OfferBox = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.pxToRem(32)};
  flex-wrap: wrap;
`;
