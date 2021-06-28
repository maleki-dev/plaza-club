import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.pxToRem(32)};
  border-radius: ${({ theme }) => theme.pxToRem(4)};
  border: ${({ theme }) => theme.border.solidStroke};
  flex-basis: 23.5%;
`;

export const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  font: ${({ theme }) => theme.fonts.lgBold};
`;

export const Footer = styled.div`
  margin-top: ${({ theme }) => theme.pxToRem(16)};
  align-self: ${props => (props.$footerLeft ? 'flex-end' : 'unset')};
`;
