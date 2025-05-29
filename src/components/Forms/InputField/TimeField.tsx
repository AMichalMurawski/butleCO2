import React from "react";
import { Field, useFormikContext } from "formik";
import { Label, TimeInput } from "./InputField.styled";
import { WeekProps } from "../../../context/Order/orderProps";

interface TimeFieldProps {
    name: string;
    day: keyof WeekProps;
    value: number;
    timeType: 'hour' | 'minute';
}

const TimeField: React.FC<TimeFieldProps> = ({ name, day, value, timeType }) => {
    const { values, setFieldValue } = useFormikContext<any>();
    
    const wrapValue = (value: number, min: number, max: number): number => {
        if (value > max) return min;
        if (value < min) return max;
        return value;
    };

    const handleTimeChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const raw = e.target.value;
        const parsed = parseInt(raw, 10);
        const max = timeType === 'hour' ? 23 : 59;

        if (!isNaN(parsed)) {
            const wrapped = wrapValue(parsed, 0, max);
            const path = `${name}.${day}.time[${value}].${timeType}`;
            setFieldValue(path, wrapped);
        }
    };
    
    return <Label>
        <Field
            as={TimeInput}
            type="number"
            name={`${name}.${day}.time[${value}].${timeType}`}
            value={values[name][day].time[value][timeType].toString().padStart(2, '0')}
            min={-1}
            max={(timeType === 'hour' ? 24 : 60)}
            onChange={handleTimeChange}
        />
    </Label>
};

export default TimeField;