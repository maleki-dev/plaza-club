import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ $dir }) => $dir};
  gap: ${({ theme }) => theme.pxToRem(32)};
  flex-basis: 31.5%;

  @media only screen and (max-width: 1270px) {
    flex-direction: row;
    flex-basis: unset;
  }
`;

export const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  font: ${({ theme }) => theme.fonts.lgBold};
`;

export const Footer = styled.div`
  margin-top: ${({ theme }) => theme.pxToRem(8)};
  align-self: flex-end;
`;
