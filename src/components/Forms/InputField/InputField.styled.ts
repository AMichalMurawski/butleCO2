import styled from 'styled-components';
import { Input, Label, P } from '../../../styles';

interface DataWraperProps {
  $flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
}

export const DataWraper = styled.div<DataWraperProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'column'};
  align-items: start;
`;

export const DataName = styled(Label)`
  min-width: max-content;
  padding-inline: 0.625rem;
  margin-right: auto;
`;

interface ValueConteinerProps {
  $width?: string;
}

export const ValueConteiner = styled.div<ValueConteinerProps>`
  position: relative;
  width: ${({ $width }) => $width || '100%'};
  text-align: left;
`;

export const DataValue = styled(Input)`
  position: relative;
  width: 100%;
  padding: 0.3rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.color.structural};
  border-radius: 1rem;
  outline: none;
  background-color: white;

  &:hover {
    box-shadow:
      inset 0 0 1px 1px ${({ theme }) => theme.color.accentTrans},
      inset 0 0 2px 2px ${({ theme }) => theme.color.remarkableTrans};
  }

  &:focus {
    box-shadow:
      inset 0 0 1px 1px ${({ theme }) => theme.color.structuralTrans},
      inset 0 0 2px 2px ${({ theme }) => theme.color.accent};
  }
`;

export const TextValue = styled(DataValue)``;

export const TextareaValue = styled(DataValue).attrs({ as: 'textarea' })`
  resize: none;
`;

export const CheckboxValueWraper = styled.label`
  width: 1.5rem;
  height: 1.5rem;
`;

export const CheckboxValue = styled(DataValue)`
  display: none;
`;

export const CheckboxHandleValue = styled.div<{ checked: boolean }>`
  position: relative;
  width: 1.15rem;
  height: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, checked }) => (checked ? theme.color.accent : theme.color.danger)};
  border: 1px solid ${({ theme }) => theme.color.structural};
  border-radius: 0.25rem;
  cursor: pointer;
  ${({ theme }) => theme.css.transition('background-color')}
`;

interface SvgWraperProps {
  $visible: boolean;
}

export const SvgWraper = styled.div<SvgWraperProps>`
  position: absolute;
  width: 0.75rem;
  height: 0.75rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -0.7rem);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  ${({ theme }) => theme.css.transition('opacity')}
`;

export const ErrorValue = styled(P)`
  position: absolute;
  bottom: -0.9rem;
  left: 0.75rem;
  width: 100%;
  color: ${({ theme }) => theme.color.danger};
  text-align: left;
  font-size: 0.6rem;
  z-index: 100;
`;

export const WeekWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.25rem 0.85rem 0;
`;

export const DayWraper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const TimeWraper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  transform: translateY(-0.35rem);
`;

export const TimeInput = styled(Input)`
  width: 5rem;
  height: 1.2rem;
  text-align: center;
`;
