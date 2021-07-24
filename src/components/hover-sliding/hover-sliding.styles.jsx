import styled from 'styled-components/macro';

export const Before = styled.span`
  opacity: 0;
  margin-left: ${({ theme }) => theme.pxToRem(8)};
  transition: opacity 0.3s;
`;

export const After = styled.span`
  opacity: 1;
  margin-right: ${({ theme }) => theme.pxToRem(8)};
  transition: opacity 0.3s;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  display: inline-flex;
  transform: translateX(${({ theme }) => theme.pxToRem(16)});
  transition: transform 0.3s;

  &:hover {
    transform: translateX(0);

    ${Before} {
      opacity: 1;
    }

    ${After} {
      opacity: 0;
    }
  }
`;
