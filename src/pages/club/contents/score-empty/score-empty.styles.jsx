import styled from 'styled-components/macro';
import back from '../../../../assets/images/__graphics.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
`;

export const Back = styled.div`
  background-image: url(${back});
  width: 54%;
  flex-basis: ${({ theme }) => theme.pxToRem(400)};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Text = styled.div`
  display: flex;
  max-width: 40%;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(16)};
  margin-bottom: ${({ theme }) => theme.pxToRem(40)};
  text-align: center;
`;
