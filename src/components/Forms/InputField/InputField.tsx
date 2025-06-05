import React from 'react';
import { FieldType } from '../../../context/Order/orderProps';
import WeekList from './WeekList';
import TextField from './TextField';
import TextareaField from './TextareaField';
import CheckboxField from './CheckboxField';
import PhoneField from './PhoneField';
import PostalCodeField from './PostalCodeField';

interface InputProps {
  label: string;
  name: string;
  componentType: FieldType;
}

const Input: React.FC<InputProps> = ({ label, name, componentType }) => {
  switch (componentType) {
    case 'text':
      return <TextField name={name} label={label} />;
    case 'textarea':
      return <TextareaField name={name} label={label} />;
    case 'checkbox':
      return <CheckboxField name={name} label={label} />;
    case 'weekTime':
      return <WeekList name={name} label={label} />;
    case 'phone':
      return <PhoneField name={name} label={label} />;
      case 'postalcode':
        return <PostalCodeField name={name} label={label} />;
    default:
      return null;
  }
};

export default Input;
