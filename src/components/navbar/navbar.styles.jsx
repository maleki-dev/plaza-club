import styled from 'styled-components/macro';

export const Container = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  flex-direction: column;
  max-height: ${({ theme }) => theme.pxToRem('385')};
  cursor: default;
`;

export const Top = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.newBackground};
`;

export const TopItem = styled.div`
  padding: ${({ theme }) => theme.pxToRem('16')};
  font: ${({ theme }) => theme.fonts.smNormalHighLine};
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: calc(100% - ${({ theme }) => theme.pxToRem(32)});
    right: ${({ theme }) => theme.pxToRem(16)};
    bottom: 0;
    display: block;
    border-bottom: ${({ theme }) => theme.border.solidPrimaryMedium};
    transform: ${props => (props.$active ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.3s ease-in-out;
  }
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