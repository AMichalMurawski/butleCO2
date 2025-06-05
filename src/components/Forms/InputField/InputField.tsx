import React from 'react';
import { FieldType } from '../../../context/Order/orderProps';
import WeekList from './WeekList';
import TextField from './TextField';
import TextareaField from './TextareaField';
import CheckboxField from './CheckboxField';
import { emailMask, nameMask, nipMask, nrLetterMask, phoneMask, postalCodeMask } from './masks';

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
      return <TextField name={name} label={label} maskRegex={phoneMask} />;
    case 'email':
      return <TextField name={name} label={label} maskRegex={emailMask} />;
    case 'name':
      return <TextField name={name} label={label} maskRegex={nameMask} />;
    case 'nrLetter':
      return <TextField name={name} label={label} maskRegex={nrLetterMask} />;
    case 'postalCode':
      return <TextField name={name} label={label} maskRegex={postalCodeMask} />;
    case 'nip':
      return <TextField name={name} label={label} maskRegex={nipMask} />;
    default:
      return null;
  }
};

export default Input;
