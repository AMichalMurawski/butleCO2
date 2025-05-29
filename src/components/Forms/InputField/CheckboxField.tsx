import React from "react";
import { CheckboxHandleValue, CheckboxValue, CheckboxValueWraper, DataName, DataWraper, ErrorValue, SvgWraper, ValueConteiner } from "./InputField.styled";
import { ErrorMessage, Field } from "formik";
import IconSvg from "../../Icons/IconSvg";
import { useTheme } from "styled-components";

interface CheckboxFieldProps {
    name: string;
    label: string;
    value: boolean;
    flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
    valueWidth?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ name, label, value, flexDirection = 'row', valueWidth = '100%' }) => {
    const theme = useTheme();

    return <DataWraper $flexDirection={flexDirection}>
        <DataName>{label}:</DataName>
        <ValueConteiner $width={valueWidth}>
            <CheckboxValueWraper>
                <Field as={CheckboxValue} name={String(name)} type="checkbox" />
                <CheckboxHandleValue checked={value}>
                    <SvgWraper $visible={value}>
                        <IconSvg name='checkmark' fill={theme.color.text} />
                    </SvgWraper>
                    <SvgWraper $visible={!value}>
                        <IconSvg name='cross' fill={theme.color.text} />
                    </SvgWraper>
                </CheckboxHandleValue>
            </CheckboxValueWraper>
            <ErrorMessage component={ErrorValue} name={String(name)} />
        </ValueConteiner>
    </DataWraper>
};

export default CheckboxField;