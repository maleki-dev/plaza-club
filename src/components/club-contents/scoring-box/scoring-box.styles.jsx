import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.pxToRem(32)};
  flex-basis: 33%;
  flex-grow: 1;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    width: 1px;
    height: ${({ theme }) => theme.pxToRem(100)};
    background-color: ${({ theme }) => theme.color.stroke};
    position: absolute;
    left: -1px;
    transform: translateY(50%);
  }
`;

export const Icon = styled.div`
  border-radius: 50%;
  width: ${({ theme }) => theme.pxToRem(64)};
  height: ${({ theme }) => theme.pxToRem(64)};
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  background-color: ${({ theme }) => theme.color.surface};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
`;

export const ScoreBox = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`;

export const Score = styled.div`
  font: ${({ theme }) => theme.fonts.xxBigBold};
  color: ${({ theme }) => theme.color.primary}; ;
`;
