import React from 'react';
import { DataName, DataWraper, ErrorValue, TextValue, ValueConteiner } from './InputField.styled';
import { ErrorMessage, useField } from 'formik';

interface TextFieldProps {
  name: string;
  label: string;
  maskRegex?: (value: string, helpers: any) => void;
}

const TextField: React.FC<TextFieldProps> = ({ name, label, maskRegex }) => {
  const [field, , helpers] = useField({ name, type: 'text' });
    
  const handleChange = (e: any) => {
    if (!maskRegex) {
      helpers.setValue(e.target.value);
      return;
    };
  
    maskRegex(e.target.value, helpers);
  };

  return (
    <DataWraper>
      <DataName>{label}:</DataName>
      <ValueConteiner>
        <TextValue {...field} type="text" onChange={handleChange} />
        <ErrorMessage component={ErrorValue} name={String(name)} />
      </ValueConteiner>
    </DataWraper>
  );
};

export default TextField;
