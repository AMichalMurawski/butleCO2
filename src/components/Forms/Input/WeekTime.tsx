import React, { useState } from 'react';
import { WeekProps } from '../../../context/Order/orderProps';
import { useTheme } from 'styled-components';
import { CheckboxHandleValue, CheckboxValue, DataName, SvgWraper } from './Input.styled';
import { Field, useFormikContext } from 'formik';
import IconSvg from '../../Icons/IconSvg';
import { weekTimeLabels } from '../../../context/Order/orderKeyof';
import { DayWraper, Label, TimeInput, TimeWraper, WeekWraper } from './WeekTime.styled';

interface WeekTimeProps {
  name: string;
  value: WeekProps;
}

const WeekTime: React.FC<WeekTimeProps> = ({ name, value }) => {
  const theme = useTheme();
  const { values, setFieldValue } = useFormikContext<any>();
  const weekData: WeekProps = values[name];

  const wrapValue = (value: number, min: number, max: number): number => {
    if (value > max) return min;
    if (value < min) return max;
    return value;
  };

  const handleTimeChange = (
    day: keyof WeekProps,
    startEnd: number,
    field: 'hour' | 'minute',
    val: number
  ) => {
    const path = `${name}.${day}.time[${startEnd}].${field}`;
    setFieldValue(path, val);
  };

  return (
    <WeekWraper>
      {Object.keys(weekData).map(dayKey => {
        const day = String(dayKey) as keyof WeekProps;
        const label = weekTimeLabels[day];

        return (
          <DayWraper key={day}>
            <DataName>{label}</DataName>
            <Label>
              <Field as={CheckboxValue} name={`${name}.${day}.isCheck`} type="checkbox" />
              <CheckboxHandleValue checked={Boolean(weekData[day].isCheck)}>
                <SvgWraper $visible={Boolean(weekData[day].isCheck)}>
                  <IconSvg name="checkmark" fill={theme.color.text} />
                </SvgWraper>
                <SvgWraper $visible={!Boolean(weekData[day].isCheck)}>
                  <IconSvg name="cross" fill={theme.color.text} />
                </SvgWraper>
              </CheckboxHandleValue>
            </Label>
            <TimeWraper>
              <Label>
                <Field
                  as={TimeInput}
                  type="number"
                  name={`${name}.${day}.time[0].hour`}
                  value={weekData[day].time[0].hour.toString().padStart(2, '0')}
                  min={-1}
                  max={24}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const raw = e.target.value;
                    const parsed = parseInt(raw, 10);

                    if (!isNaN(parsed)) {
                      const wrapped = wrapValue(parsed, 0, 23);
                      handleTimeChange(day, 0, 'hour', wrapped);
                    }
                  }}
                />
              </Label>
              :
              <Label>
                <Field
                  as={TimeInput}
                  type="number"
                  name={`${name}.${day}.time[0].minute`}
                  value={weekData[day].time[0].minute.toString().padStart(2, '0')}
                  min={-1}
                  max={60}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const raw = e.target.value;
                    const parsed = parseInt(raw, 10);

                    if (!isNaN(parsed)) {
                      const wrapped = wrapValue(parsed, 0, 59);
                      handleTimeChange(day, 0, 'minute', wrapped);
                    }
                  }}
                />
              </Label>
              {' - '}
              <Label>
                <Field
                  as={TimeInput}
                  type="number"
                  name={`${name}.${day}.time[1].hour`}
                  value={weekData[day].time[1].hour.toString().padStart(2, '0')}
                  min={-1}
                  max={24}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const raw = e.target.value;
                    const parsed = parseInt(raw, 10);

                    if (!isNaN(parsed)) {
                      const wrapped = wrapValue(parsed, 0, 23);
                      handleTimeChange(day, 1, 'hour', wrapped);
                    }
                  }}
                />
              </Label>
              :
              <Label>
                <Field
                  as={TimeInput}
                  type="number"
                  name={`${name}.${day}.time[1].minute`}
                  value={weekData[day].time[1].minute.toString().padStart(2, '0')}
                  min={-1}
                  max={60}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const raw = e.target.value;
                    const parsed = parseInt(raw, 10);

                    if (!isNaN(parsed)) {
                      const wrapped = wrapValue(parsed, 0, 59);
                      handleTimeChange(day, 1, 'minute', wrapped);
                    }
                  }}
                />
              </Label>
            </TimeWraper>
          </DayWraper>
        );
      })}
    </WeekWraper>
  );
};

export default WeekTime;
