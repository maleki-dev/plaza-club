import styled from 'styled-components/macro';

const getTypeColor = type => {
  if (type === 'error') return 'error';
};

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  max-height: ${({ theme }) => theme.pxToRem(40)};
  font: ${({ theme }) => theme.fonts.mdNormal};
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.pxToRem('8 24')};
`;

export const Back = styled.div`
  position: absolute;
  border-radius: ${({ theme }) => theme.pxToRem(20)};
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, $type }) => theme.color[getTypeColor($type)]};
  opacity: 16%;
`;

export const Message = styled.span`
  margin-right: ${({ theme }) => theme.pxToRem(16)};
`;
