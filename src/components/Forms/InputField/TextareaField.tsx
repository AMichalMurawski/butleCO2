import React from "react";
import { DataName, DataWraper, ErrorValue, TextareaValue, ValueConteiner } from "./InputField.styled";
import { ErrorMessage, Field } from "formik";

interface TextareaFieldProps {
    name: string;
    label: string;
    maxLength?: number;
    rows?: number;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ name, label, maxLength = 250, rows = 5 }) => {
    return <DataWraper>
        <DataName>{label}:</DataName>
        <ValueConteiner>
            <Field as={TextareaValue} name={String(name)} maxLength={maxLength} rows={rows} />
            <ErrorMessage component={ErrorValue} name={String(name)} />
        </ValueConteiner>
    </DataWraper>         
};

export default TextareaField;