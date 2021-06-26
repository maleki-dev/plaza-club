import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme }) => theme.pxToRem(32)};
  min-height: ${({ theme }) => theme.pxToRem(32)};

  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.pxToRem(24)};
  }
`;
