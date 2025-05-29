import styled from 'styled-components';
import { P } from '../../../styles/Global.styled';

interface DataWraperProps {
  $flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
}

export const DataWraper = styled.div<DataWraperProps>`
  width: 100%;
  display: flex;
  flex-direction: ${({$flexDirection}) => $flexDirection || 'column'};
  gap: 2px;
  align-items: start;
`;

export const DataName = styled.label`
  min-width: max-content;
  padding-inline: 10px;
  font-size: 0.75rem;
  text-align: left;
  margin-right: auto;
`;

interface ValueConteinerProps {
  $width?: string
}

export const ValueConteiner = styled.div<ValueConteinerProps>`
  position: relative;
  width: ${({$width}) => $width || '100%' };
`;

export const DataValue = styled.input`
  position: relative;
  width: 100%;
  padding: 5px 10px;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.color.structural};
  border-radius: 10px;
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
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const CheckboxValue = styled(DataValue)`
  display: none;
`;

export const CheckboxHandleValue = styled.div<{ checked: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  background-color: ${({ theme, checked }) => (checked ? theme.color.accent : theme.color.danger)};
  border: 1px solid ${({ theme }) => theme.color.structural};
  border-radius: 4px;
  transition: background-color ease-in-out 300ms;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

interface SvgWraperProps {
  $visible: boolean;
}

export const SvgWraper = styled.div<SvgWraperProps>`
  position: absolute;
  width: 13px;
  height: 13px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -12px);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity ease-in-out 300ms;
`;

export const ErrorValue = styled.p`
  position: absolute;
  bottom: -13px;
  left: 10px;
  width: 100%;
  color: ${({ theme }) => theme.color.danger};
  text-align: left;
  font-size: 0.6rem;
`;

export const WeekWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px 15px 0;
`;

export const DayWraper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const TimeWraper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  transform: translateY(-3px);
`;

export const TimeInput = styled.input`
  width: 45px;
  height: 20px;
  text-align: center;
`;

export const Label = styled.label`
  height: 20px;
`;
