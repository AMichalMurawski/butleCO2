import styled from 'styled-components';

export const WeekWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px 15px 0;
`;

export const DayWraper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const TimeWraper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const TimeInput = styled.input`
  width: 45px;
  height: 20px;
  text-align: center;
  transform: translateY(-3px);
`;

export const Label = styled.label`
  height: 20px;
`;
