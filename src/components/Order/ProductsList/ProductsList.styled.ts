import styled from 'styled-components';

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

export const TableColGroup = styled.colgroup``

export const TableColumn = styled.col`
  &:nth-of-type(1) {
    width: 60px;
  }

  &:nth-of-type(4) {
    width: 115px;
  }

  &:last-of-type {
    width: 50px;
  }
`

// >>>>>> Head & Footer <<<<<<

export const TableHead = styled.thead``;

export const TableFooter = styled.tfoot`

  & tr:not(:last-of-type) {
    background-color: ${({ theme }) => theme.color.structural};
    color: ${({ theme }) => theme.color.text};
  }

  & tr:last-of-type {
    background-color: ${({ theme }) => theme.color.remarkable};
    color: ${({ theme }) => theme.color.structural};
  }
`;

export const TableRow = styled.tr``;

export const TableHeaderCell = styled.th`
  position: relative;
  z-index: 1;
  padding: 15px;
  border-bottom: 5px solid ${({ theme }) => theme.color.text};

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
  &:nth-child(6) {
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

`;

interface TableFooterCellProps {
  $sum?: boolean;
}

export const TableFooterCell = styled.td<TableFooterCellProps>`
  padding: 15px;
  font-weight: ${({ $sum }) => ($sum ? '700' : null)};

  &:nth-child(1) {
    background-color: ${({ theme }) => theme.color.text};
  }
`;

// >>>>>> Body <<<<<<

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  height: 60px;
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

// >>>>>> Icons <<<<<<

interface IconWraperProps {
  $rotate?: number;
}

export const IconWraper = styled.div<IconWraperProps>`
  margin-inline: auto;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  transform-origin: center;

  ${TableBodyCell}:hover & {
    scale: 1.2;
  }
`;

export const IconAdd = styled(IconWraper)`
  transform-origin: center;
  transform: translate(4px, -2px) rotate(45deg);

  ${TableBodyRow}:hover & {
    scale: 1.2;
  }
`;