import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: ${({ theme }) => theme.pxToRem(400)};
  min-height: ${({ theme }) => theme.pxToRem(500)};
  display: flex;
  flex-direction: column;
  border: ${({ theme }) => theme.border.solidStroke};
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  background-color: ${({ theme }) => theme.color.background};
`;

export const Head = styled.div`
  background-color: ${({ theme }) => theme.color.surface};
  border-radius: ${({ theme }) => theme.pxToRem('3 3 0 0')};
  padding: ${({ theme }) => theme.pxToRem(24)};
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  padding: ${({ theme }) => theme.pxToRem('24 32 32')};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ButtonContainer = styled.div`
  margin-top: auto;

  button {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(4)};
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(24)};
  margin: ${({ theme }) => theme.pxToRem('32 0 24')};
`;

export const BlueLink = styled(Link)`
  color: ${({ theme }) => theme.color.secondary};
`;
