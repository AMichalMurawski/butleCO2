import React from 'react';
import { FieldType } from '../../../context/Order/orderProps';
import WeekList from './WeekList';
import TextField from './TextField';
import TextareaField from './TextareaField';
import CheckboxField from './CheckboxField';

interface InputProps {
    label: string;
    name: string;
    value?: any;
    componentType: keyof FieldType;
}

const Input: React.FC<InputProps> = ({ label, name, value, componentType }) => {

    return (
        <>
            {String(componentType) === 'text' && (
                <TextField name={name} label={label} />
            )}
            {String(componentType) === 'textarea' && (
                <TextareaField name={name} label={label} />
            )}
            {String(componentType) === 'checkbox' && (
                <CheckboxField name={name} value={value} label={label} />
            )}
            {String(componentType) === 'weekTime' && (
                <WeekList name={String(name)} label={label} />
            )}
        </>
    );
};

export default Input