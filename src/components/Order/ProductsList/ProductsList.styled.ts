import styled from 'styled-components';
import { P } from '../../../styles/Global.styled';

// >>>>>> Table <<<<<<

export const ProductsListWraper = styled.div`
  width: 100%;
  padding-inline: 60px;
`;

export const ProductsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-aling: left;
`;

// >>>>>> Head & Footer <<<<<<

export const TableHead = styled.thead``;

export const TableFooter = styled.tfoot``;

export const TableRow = styled.tr``;

export const TableHeaderCell = styled.th`
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 15px);
    height: 100%;
    z-index: -1;
  }

  &:nth-child(1),
  &:nth-child(3),
  &:nth-child(5) {
    color: ${({ theme }) => theme.color.text};
    &::before {
      background-color: ${({ theme }) => theme.color.structural};
    }
    &::after {
      color: ${({ theme }) => theme.color.text};
      background-color: ${({ theme }) => theme.color.structural};
    }
  }

  &:nth-child(2),
  &:nth-child(4),
  &:nth-child(6),
  &:nth-child(7) {
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
      clip-path: polygon(30% 0, calc(100% - 30px) 0, calc(100% - 30px) 100%, 30% 100%);
    }
  }

  &:not(:last-of-type) {
    &::before {
      clip-path: polygon(30% 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 30% 100%);
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
    border-left: 5px solid ${({ theme }) => theme.color.text};
  }

  padding: 15px;
  border-bottom: 5px solid ${({ theme }) => theme.color.text};
`;

interface TableFooterCellProps {
  $sum?: boolean;
}

export const TableFooterCell = styled.td<TableFooterCellProps>`
  padding: 15px;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ $sum }) => ($sum ? '700' : null)};
  background-color: ${({ theme, $sum }) => ($sum ? theme.color.structural : null)};
`;

export const CellContent = styled(P)`
  color: inherit;
  z-index: 1;
`;

// >>>>>> Body <<<<<<

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  &:nth-child(even) {
    color: ${({ theme }) => theme.color.main};
    background-color: ${({ theme }) => theme.color.remarkable};
  }
`;

interface TableBodyCellProps {
  $transaction?: boolean;
}
  
export const TableBodyCell = styled.td<TableBodyCellProps>`
  position: relative;
  padding: 15px;

  &:first-of-type {
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.structural};
    border-bottom: 5px solid ${({ theme }) => theme.color.text};
  }

  &:not(:first-of-type) {
    border-bottom: 5px solid ${({ theme }) => theme.color.structural};
  }

  &:hover:has(svg) {
    cursor: pointer;
  }

  &::before {
    ${({ $transaction }) => {
      if ($transaction === undefined || $transaction === null) {return}
      return ($transaction ? 'content: "Zakup"' : 'content: "Wymiana"');
    }};
    // content: 'wymiana';
    content: ${({ $transaction }) => $transaction ? 'Zakup' : 'Wymiana'};
    position: absolute;
    right: 0;
    bottom: -5px;
    color: black;
    // background-color: red;
    z-index: 100;
    scale: 0.8;
  };
`;

export const AmountInput = styled.input`
    width: 60px;
  text-align: center;
  padding: 4px 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    scale: 1 1.2;
  }
`

// >>>>>> Icons <<<<<<

interface IconWraperProps {
  $rotate?: number;
}

export const IconWraper = styled.div<IconWraperProps>`
  margin-inline: auto;
  width: 15px;
  height: 15px;
  border-radius: 15px;

  ${TableBodyCell}:hover & {
    scale: 1.2;
  }
`;

export const IconAdd = styled(IconWraper)`
  transform-origin: center; transform: rotate(45deg);

  ${TableBodyRow}:hover & {
    scale: 1.2;
  }
`;