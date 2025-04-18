import styled from 'styled-components';
import { Field } from 'formik';
import { P } from '../../styles/Global.styled';

export const InputStyled = styled(Field)``;

export const FormWraper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(5 auto);
  gap: 10px;
  justify-items: start;
  align-items: center;
`;

interface GridCellProps {
  gridColumn: string;
  gridRow: string;
  width?: string;
  height?: string;
  atr?: string[] | null;
}

export const GridCell = styled.div<GridCellProps>`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  ${({atr}) => atr?.join(";")}
`;

export const Placeholder = styled(P)``;
