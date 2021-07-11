import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  border: ${({ theme }) => theme.border.solidStroke};
  padding: ${({ theme }) => theme.pxToRem(32)};
  background-color: gray;
  color: black;
  margin-top: 0.25rem;
  display: ${props => (props.$show ? 'block' : 'none')}; ;
`;
