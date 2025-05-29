import React from 'react';
import { WeekProps } from '../../../context/Order/orderProps';
import { DataName, DataWraper } from './InputField.styled';
import { useFormikContext } from 'formik';
import { weekTimeLabels } from '../../../context/Order/orderKeyof';
import { DayWraper, TimeWraper, WeekWraper } from './InputField.styled';
import CheckboxInput from './CheckboxField';
import TimeField from './TimeField';

interface WeekListProps {
  name: string;
  label: string;
}

const WeekList: React.FC<WeekListProps> = ({ name, label }) => {
  const { values } = useFormikContext<any>();
  const weekData: WeekProps = values[name];

  return (<DataWraper>
    <DataName>{label}:</DataName>
    <WeekWraper>
      {Object.keys(weekData).map(dayKey => {
        const day = String(dayKey) as keyof WeekProps;
        const label = weekTimeLabels[day];

        return (
          <DayWraper key={day}>
            <CheckboxInput name={`${name}.${day}.isCheck`} label={label} value={weekData[day].isCheck} flexDirection='row-reverse' valueWidth='auto' />
            <TimeWraper>
              <TimeField name={name} day={day} value={0} timeType='hour' />
              :
              <TimeField name={name} day={day} value={0} timeType='minute' />
              {' - '}
              <TimeField name={name} day={day} value={1} timeType='hour'/>
              :
              <TimeField name={name} day={day} value={1} timeType='minute'/>
            </TimeWraper>
          </DayWraper>
        );
      })}
    </WeekWraper>
  </DataWraper>
  );
};

export default WeekList;
