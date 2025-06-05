import React from 'react';
import { DataName, DataWraper, ErrorValue, TextValue, ValueConteiner } from './InputField.styled';
import { ErrorMessage, useField } from 'formik';

interface PhoneFieldProps {
  name: string;
  label: string;
}

const stacionaryNumbers = [12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 25, 29, 32, 33, 34, 41, 42, 43, 44, 46, 48, 52, 54, 55, 56, 58, 59, 61, 62, 63, 65, 67, 68, 71, 74, 75, 76, 77, 81, 82, 83, 84, 85, 86, 87, 89, 91, 94, 95];

const PhoneField: React.FC<PhoneFieldProps> = ({ name, label }) => {
  const [field, , helpers] = useField({ name, type: 'text' });
  
  const handleChange = (e: any) => {
    const value = e.target.value;
    const rawValue = value.replace(/\D/g, '');
  
    if (rawValue.length > 9) return;
  
    const includesStacionary = stacionaryNumbers.includes(Number(rawValue.substring(0, 2)));
  
    let regexPattern: RegExp;
    if (includesStacionary) {
      regexPattern = /^(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/;
    } else {
      regexPattern = /^(\d{0,3})(\d{0,3})(\d{0,3})$/;
    }
  
    const formattedValue = rawValue.replace(regexPattern, (...groups: any) => {
      const matchGroups = groups.slice(1, -2);
      return matchGroups.filter(Boolean).join('-');
    });
  
    helpers.setValue(formattedValue);
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

export default PhoneField;
