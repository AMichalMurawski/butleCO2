import React from 'react';
import { DataName, DataWraper, ErrorValue, TextValue, ValueConteiner } from './InputField.styled';
import { ErrorMessage, useField } from 'formik';

interface PostalFieldProps {
  name: string;
  label: string;
}

const PostalCodeField: React.FC<PostalFieldProps> = ({ name, label }) => {
  const [field, , helpers] = useField({ name, type: 'text' });
  
  const handleChange = (e: any) => {
    const value = e.target.value;
    
    const rawValue = value.replace(/\D/g, '');

    if (rawValue.toString().length > 5) return

    const formattedValue = rawValue
      .replace(/^(\d{0,2})(\d{0,3})$/, '$1-$2')
      .replace(/-+$/, '');
    
    helpers.setValue(formattedValue);
  }
  
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

export default PostalCodeField;
