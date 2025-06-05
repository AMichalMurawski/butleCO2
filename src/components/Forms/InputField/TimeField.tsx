import React from 'react';
import { Field, useField, useFormikContext } from 'formik';
import { Label, TimeInput } from './InputField.styled';

interface TimeFieldProps {
  name: string;
  index: number;
  timeType: 'hour' | 'minute';
}

const TimeField: React.FC<TimeFieldProps> = ({ name, index, timeType }) => {
  const fieldName = `${name}[${index}].${timeType}`;
  const [field, , helpers] = useField<number>(fieldName);

  const wrapValue = (value: number, min: number, max: number): number => {
    if (value > max) return min;
    if (value < min) return max;
    return value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const parsed = parseInt(raw, 10);
    const max = timeType === 'hour' ? 23 : 59;

    if (!isNaN(parsed)) {
      const wrapped = wrapValue(parsed, 0, max);
      helpers.setValue(wrapped);
    }
  };

  const displayValue = field.value?.toString().padStart(2, '0') ?? '00';

  return (
    <Label>
      <TimeInput
        {...field}
        type="number"
        min={-1}
        max={timeType === 'hour' ? 24 : 60}
        value={displayValue}
        onChange={handleChange}
      />
    </Label>
  );
};

export default TimeField;
