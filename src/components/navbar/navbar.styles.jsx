import styled from 'styled-components/macro';

export const Container = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: ${({ theme }) => theme.pxToRem('385')};
  cursor: default;
`;

export const Top = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.newBackground};
`;

export const TopItem = styled.div`
  padding: ${({ theme }) => theme.pxToRem('16 16 14')};
  border-bottom: ${props =>
    props.theme.border[props.$active ? 'solidPrimaryMedium' : 'solidNewBackgroundMedium']};
  font: ${({ theme }) => theme.fonts.smNormalHighLine};
  cursor: pointer;
`;

export const Bottom = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.background};
  padding: ${({ theme }) => theme.pxToRem('8 16 24')};
  justify-content: space-between;
`;

export const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.pxToRem('0 24')};
`;

export const Title = styled.div`
  margin: ${({ theme }) => theme.pxToRem('16 0')};
`;

export const Item = styled.div`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.pxToRem(8)};
  }
`;
