import React from "react";
import { DataName, DataWraper, ErrorValue, TextValue, ValueConteiner } from "./InputField.styled";
import { ErrorMessage, Field } from "formik";

interface TextFieldProps {
    name: string;
    label: string;
}

const TextField: React.FC<TextFieldProps> = ({ name, label }) => {
    return <DataWraper>
        <DataName>{label}:</DataName>
        <ValueConteiner>
            <Field as={TextValue} name={String(name)} type='text' />
            <ErrorMessage component={ErrorValue} name={String(name)} />
        </ValueConteiner>
    </DataWraper>

    
};

export default TextField;