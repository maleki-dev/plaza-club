import styled from 'styled-components/macro';

export const CustomInput = styled.input`
  padding: ${({ theme }) => theme.pxToRem('8 16')};
  border: ${({ theme }) => theme.border.solidStroke};
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  font: ${({ theme }) => theme.fonts.mdNormal};

  &::placeholder {
    color: ${({ theme }) => theme.color.unselected};
  }
`;
