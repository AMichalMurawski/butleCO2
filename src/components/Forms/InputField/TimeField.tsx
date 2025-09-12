import React from 'react';
import { useField } from 'formik';
import { TimeInput } from './InputField.styled';

interface TimeFieldProps {
  name: string;
  index: number;
}

const TimeField: React.FC<TimeFieldProps> = ({ name, index }) => {
  const fieldName = `${name}[${index}]`;
  const [field, , helpers] = useField<string>(fieldName);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(e.target.value);
  };

  return (
    <label htmlFor={name}>
      <TimeInput
        id={name}
        {...field}
        type="time"
        step={60}
        value={field.value ?? ''}
        onChange={handleChange}
      />
    </label>
  );
};

export default TimeField;
