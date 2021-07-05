import styled from 'styled-components/macro';

export const Table = styled.div`
  display: table;
  border-top: ${({ theme }) => theme.border.solidStroke};
`;

export const Caption = styled.div`
  display: table-caption;
`;

export const Cell = styled.div`
  display: table-cell;
  width: ${props => props.$span * 10 + '%'};
  padding: ${({ theme }) => theme.pxToRem('24 16')};
  border-bottom: ${({ theme }) => theme.border.solidStrokeVarient};
  vertical-align: middle;

  &:first-of-type {
    padding-right: ${({ theme }) => theme.pxToRem(32)};
  }

  &:last-of-type {
    padding-left: ${({ theme }) => theme.pxToRem(32)};
  }
`;

export const ColGroup = styled.div`
  display: table-column-group;
`;

export const Col = styled.div`
  display: table-column;
`;

export const Head = styled.div`
  display: table-header-group;

  ${Cell} {
    border-bottom: ${({ theme }) => theme.border.solidStroke};
    font: ${({ theme }) => theme.fonts.lgBold};
  }
`;

export const Body = styled.div`
  display: table-row-group;
`;

export const Foot = styled.div`
  display: table-footer-group;
`;

export const Row = styled.div`
  display: table-row;

  &:last-of-type ${Cell} {
    border-bottom: none;
  }
`;
