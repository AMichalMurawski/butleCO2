import React from 'react';
import { CheckboxHandleValue, CheckboxValue, CheckboxValueWraper, DataName, DataWraper, ErrorValue, SvgWraper, TextareaValue, TextValue, ValueConteiner } from './Input.styled';
import { ErrorMessage, Field } from 'formik';
import IconSvg from '../../Icons/IconSvg';
import { useTheme } from 'styled-components';
import { FieldType } from '../../../context/Order/orderProps';
import WeekTime from './WeekTime';

interface InputProps {
    label: string;
    name: string;
    value?: any;
    componentType: keyof FieldType;
}

const Input: React.FC<InputProps> = ({ label, name, value, componentType }) => {
    const theme = useTheme();

    return (
        <DataWraper>
            <DataName>{label}:</DataName>
            <ValueConteiner>
                {String(componentType) === 'text' && (
                    <Field as={TextValue} name={String(name)} type='text' />
                )}
                {String(componentType) === 'textarea' && (
                    <Field as={TextareaValue} name={String(name)} maxLength='250' rows='5' />
                )}
                {String(componentType) === 'checkbox' && (
                    <CheckboxValueWraper>
                        <Field as={CheckboxValue} name={String(name)} type="checkbox" />
                        <CheckboxHandleValue checked={Boolean(value)}>
                            <SvgWraper $visible={Boolean(value)}>
                                <IconSvg name='checkmark' fill={theme.color.text} />
                            </SvgWraper>
                            <SvgWraper $visible={!Boolean(value)}>
                                <IconSvg name='cross' fill={theme.color.text} />
                            </SvgWraper>
                        </CheckboxHandleValue>
                    </CheckboxValueWraper>
                )}
                {String(componentType) === 'weekTime' && (
                    <WeekTime name={String(name)} value={value} />
                )}
                <ErrorMessage component={ErrorValue} name={String(name)} />
            </ValueConteiner>
        </DataWraper>
    );
};

export default Input