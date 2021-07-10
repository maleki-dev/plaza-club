import styled from 'styled-components/macro';
import { ReactComponent as Eye } from '../../assets/images/svg/__eye.svg';

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.pxToRem('8 16')};
  border: ${({ theme }) => theme.border.solidStroke};
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  font: ${({ theme }) => theme.fonts.mdNormal};
  flex-grow: 1;

  &::placeholder {
    color: ${({ theme }) => theme.color.unselected};
  }
`;

export const ShowPassword = styled(Eye)`
  position: absolute;
  left: ${({ theme }) => theme.pxToRem(16)};
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
