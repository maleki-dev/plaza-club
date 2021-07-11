import styled from 'styled-components/macro';
import banner from '../../../assets/images/banner.png';

export const Container = styled.div`
  background-image: url(${banner});
  flex-basis: 65%;
  flex-grow: 1;
  display: flex;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: ${({ theme }) => theme.pxToRem(392)};
  padding: ${({ theme }) => theme.pxToRem('60 50 40')};
`;

export const Heading = styled.div`
  display: flex;
  flex-basis: 60%;

  @media screen and (max-width: 1300px) {
    flex-grow: 1;
  }
`;

export const HeadingLogo = styled.div`
  margin-left: ${({ theme }) => theme.pxToRem(24)};
`;

export const HeadingInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeadingTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.pxToRem(8)};
`;

export const HeadingSubtitle = styled.p`
  font: ${({ theme }) => theme.fonts.mdNormal};
`;
