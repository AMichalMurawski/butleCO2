import React from 'react';
import { DataName, DataWraper, ErrorValue, TextValue, ValueConteiner } from './InputField.styled';
import { ErrorMessage, useField } from 'formik';

interface TextFieldProps {
  name: string;
  label: string;
}

const TextField: React.FC<TextFieldProps> = ({ name, label }) => {
  const [field] = useField(name);

  return (
    <DataWraper>
      <DataName>{label}:</DataName>
      <ValueConteiner>
        <TextValue {...field} type="text" />
        <ErrorMessage component={ErrorValue} name={String(name)} />
      </ValueConteiner>
    </DataWraper>
  );
};

export default TextField;
