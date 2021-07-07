import styled from 'styled-components/macro';

export const Subtitle = styled.div`
  font: ${({ theme }) => theme.fonts.xsNormal};
  margin-top: ${({ theme }) => theme.pxToRem(4)};
`;

export const Info = styled.span`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.pxToRem('-8 0')};
`;

export const RemoveUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonGroup = styled.form`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;

export const RemveUserName = styled.span`
  color: ${({ theme }) => theme.color.primary};
`;
