import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
`;

export const Subtitle = styled.div`
  font: ${({ theme }) => theme.fonts.xsNormal};
  margin-top: ${({ theme }) => theme.pxToRem(4)};
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 65%;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.pxToRem(24)};
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ theme }) => theme.pxToRem(32)};
  flex-basis: 31.5%;
`;
