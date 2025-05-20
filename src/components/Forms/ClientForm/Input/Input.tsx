import React from 'react';
import { CheckboxHandleValue, CheckboxValue, CheckboxValueWraper, DataName, DataWraper, ErrorValue, TextareaValue, TextValue, ValueConteiner } from './Input.styled';
import { ErrorMessage, Field } from 'formik';

interface InputProps {
    label: string;
    name: string;
    value?: boolean;
    componentType: 'text' | 'textarea' | 'checkbox';
}

const Input: React.FC<InputProps> = ({ label, name, value, componentType }) => {
    console.log(name, componentType);

    return (
        <DataWraper>
            <DataName>{label}:</DataName>
            <ValueConteiner>
                {componentType === 'text' && (
                    <Field as={TextValue} name={String(name)} type='text' />
                )}
                {componentType === 'textarea' && (
                    <Field as={TextareaValue} name={String(name)} maxLength='250' rows='5' />
                )}
                {componentType === 'checkbox' && (
                    <CheckboxValueWraper>
                        <Field as={CheckboxValue} name={String(name)} type="checkbox" />
                        <CheckboxHandleValue checked={Boolean(value)} />
                    </CheckboxValueWraper>
                )}
                <ErrorMessage component={ErrorValue} name={String(name)} />
            </ValueConteiner>
        </DataWraper>
    );
};

export default Input