import styled from 'styled-components/macro';
import back from '../../assets/images/Tourist.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  padding: 32px;
`;

export const Back = styled.div`
  min-width: 500px;
  min-height: 500px;
  background-image: url(${back});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
