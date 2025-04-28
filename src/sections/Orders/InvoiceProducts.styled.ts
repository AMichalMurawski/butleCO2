import styled from 'styled-components';
import { P } from '../../styles/Global.styled';

export const InvoiceProducts = styled.div`
  width: 100%;
  padding: 0 60px 30px;
`;

export const ProductsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-aling: left;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr``;

export const TableHeaderCell = styled.th`
  position: relative;
  //   &:nth-child(even) {
  //     color: ${({ theme }) => theme.color.main};
  //     background-color: ${({ theme }) => theme.color.remarkable};
  //   }
  //   &:nth-child(odd) {
  //     background-color: ${({ theme }) => theme.color.main};
  //   }
  z-index: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 20px);
    height: 100%;
    z-index: -1;
  }

  &:nth-child(1),
  &:nth-child(2) {
    &::before {
      background-color: ${({ theme }) => theme.color.main};
    }
    &::after {
      background-color: ${({ theme }) => theme.color.main};
    }
  }

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    color: ${({ theme }) => theme.color.main};
    &::before {
      background-color: ${({ theme }) => theme.color.remarkable};
    }
    &::after {
      background-color: ${({ theme }) => theme.color.remarkable};
    }
  }

  &:last-of-type {
    &::before {
      width: calc(100% + 30px);
      clip-path: polygon(50% 0, calc(100% - 30px) 0, calc(100% - 30px) 100%, 50% 100%);
    }
  }

  &:not(:last-of-type) {
    &::before {
      clip-path: polygon(50% 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 50% 100%);
    }
  }

  &:first-of-type {
    &::after {
      clip-path: polygon(0 0, 60% 0, 60% 100%, 0 100%);
    }
  }

  &:not(:first-of-type) {
    &::after {
      left: -10px;
      clip-path: polygon(0 0, 60% 0, 60% 100%, 0 100%, 30px 50%);
    }
  }

  padding: 15px;
  border: 5px solid ${({ theme }) => theme.color.structural};
`;

export const CellContent = styled(P)`
  z-index: 1;
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  &:nth-child(even) {
    color: ${({ theme }) => theme.color.main};
    background-color: ${({ theme }) => theme.color.remarkable};
  }
`;

export const TableBodyCell = styled.td`
  padding: 15px;
  &:first-of-type {
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.main};
  }
  border: 5px solid ${({ theme }) => theme.color.structural};
`;

export const TableFooter = styled.tfoot``;

interface TableFooterCellProps {
  $sum?: boolean;
}

export const TableFooterCell = styled.td<TableFooterCellProps>`
  padding: 15px;
  font-weight: ${({ $sum }) => ($sum ? '700' : null)};
  background-color: ${({ theme, $sum }) => ($sum ? theme.color.main : null)};
`;
