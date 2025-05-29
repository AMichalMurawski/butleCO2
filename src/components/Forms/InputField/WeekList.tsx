import React from 'react';
import { DataName, DataWraper, DayWraper, TimeWraper, WeekWraper } from './InputField.styled';
import { useFormikContext } from 'formik';
import { weekTimeLabels } from '../../../context/Order/orderKeyof';
import CheckboxInput from './CheckboxField';
import TimeField from './TimeField';
import { DayOfWeek, DayProps } from '../../../context/Order/orderProps';

interface WeekListProps {
  name: string;
  label: string;
}

const defaultDayProps = (day: DayOfWeek): DayProps => ({
  day,
  enabled: false,
  time: [
    { hour: 9, minute: 0 },
    { hour: 17, minute: 0 },
  ],
});

const WeekList: React.FC<WeekListProps> = ({ name, label }) => {
  const { values } = useFormikContext<any>();

  const selectedDays: DayProps[] = values[name] || [];

  const daysOfWeek = Object.keys(weekTimeLabels) as DayOfWeek[];

  const weekData: DayProps[] = daysOfWeek.map(day => {
    let found: DayProps | undefined = defaultDayProps(day);
    if (selectedDays) {
      found = selectedDays.find(d => d.day === day);
    }
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
              <CheckboxInput
                name={`${name}[${index}].enabled`}
                label={label}
                flexDirection="row-reverse"
                valueWidth="auto"
              />
              <TimeWraper>
                <TimeField name={`${name}[${index}]time`} index={0} timeType="hour" />
                :
                <TimeField name={`${name}[${index}]time`} index={0} timeType="minute" />
                {' - '}
                <TimeField name={`${name}[${index}]time`} index={1} timeType="hour" />
                :
                <TimeField name={`${name}[${index}]time`} index={1} timeType="minute" />
              </TimeWraper>
            </DayWraper>
          );
        })}
      </WeekWraper>
    </DataWraper>
  );
};

export default WeekList;
