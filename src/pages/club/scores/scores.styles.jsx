import styled from 'styled-components/macro';
import back from '../../../assets/images/scoresback.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Scoring = styled.div`
  padding-top: ${({ theme }) => theme.pxToRem(32)};
  margin-top: ${({ theme }) => theme.pxToRem(32)};
  display: flex;
  flex-wrap: wrap;
`;

export const BackImage = styled.div`
  background-image: url(${back});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex-basis: 45%;
`;

export const ScoringWays = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 55%;
`;

export const TitleBox = styled.div`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(8)};
`;

export const ScoringBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-left: -1px;
`;
