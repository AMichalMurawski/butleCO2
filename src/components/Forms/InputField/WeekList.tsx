import React from 'react';
import {
  DataName,
  DataWraper,
  DayWraper,
  ErrorValue,
  TimeWraper,
  WeekWraper,
} from './InputField.styled';
import { ErrorMessage, useFormikContext } from 'formik';
import { weekTimeLabels } from '../../../context/Order/orderKeyof';
import CheckboxField from './CheckboxField';
import TimeField from './TimeField';
import { DayOfWeek, DayProps } from '../../../context/Order/orderProps';

interface WeekListProps {
  name: string;
  label: string;
}

const defaultDayProps = (day: DayOfWeek): DayProps => ({
  day,
  enabled: false,
  time: ['09:00', '17:00'],
});

const WeekList: React.FC<WeekListProps> = ({ name, label }) => {
  const { values } = useFormikContext<any>();

  const selectedDays: DayProps[] = values[name] || [];

  const daysOfWeek = Object.keys(weekTimeLabels) as DayOfWeek[];

  const weekData: DayProps[] = daysOfWeek.map(day => {
    const found = selectedDays.find(d => d.day === day);
    return found ?? defaultDayProps(day);
  });

  return (
    <DataWraper>
      <DataName>{label}:</DataName>
      <WeekWraper>
        {weekData.map((dayData, index) => {
          const day: DayOfWeek = dayData.day;
          const label = weekTimeLabels[day];

          return (
            <DayWraper key={day}>
              <CheckboxField
                name={`${name}[${index}].enabled`}
                label={label}
                flexDirection="row-reverse"
                valueWidth="auto"
              />
              <TimeWraper>
                <TimeField name={`${name}[${index}].time`} index={0} />
                {' - '}
                <TimeField name={`${name}[${index}].time`} index={1} />
              </TimeWraper>
            </DayWraper>
          );
        })}
      </WeekWraper>
      <ErrorMessage component={ErrorValue} name={name} />
    </DataWraper>
  );
};

export default WeekList;
