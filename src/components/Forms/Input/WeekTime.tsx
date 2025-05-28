import React, { useState } from "react";
import { WeekProps } from "../../../context/Order/orderProps";
import { useTheme } from "styled-components";
import { CheckboxHandleValue, CheckboxValue, SvgWraper } from "./Input.styled";
import { Field, useFormikContext } from "formik";
import IconSvg from "../../Icons/IconSvg";
import { weekTimeLabels } from "../../../context/Order/orderKeyof";

interface WeekTimeProps {
    name: string;
    value: WeekProps;
}

const WeekTime: React.FC<WeekTimeProps> = ({ name, value }) => {
    const theme = useTheme();
    const { values, setFieldValue } = useFormikContext<any>();
    const weekData: WeekProps = values[name];
    
    const handleTimeChange = (
        day: keyof WeekProps,
        startEnd: number,
        field: "hour" | "minute",
        val: number
    ) => {
        const path = `${name}.${day}.time[${startEnd}].${field}`;
        setFieldValue(path, val);
    };
    
    return (
        <>
            {
                Object.keys(weekData).map(dayKey => {
                    const day = String(dayKey) as keyof WeekProps;
                    const label = weekTimeLabels[day];

                    return (<div key={day}>
                        <label>
                            <p>{label}</p>
                        <Field as={CheckboxValue} name={`${name}.${day}.isCheck`} type="checkbox" />
                        <CheckboxHandleValue checked={Boolean(weekData[day].isCheck)}>
                            <SvgWraper $visible={Boolean(weekData[day].isCheck)}>
                                <IconSvg name='checkmark' fill={theme.color.text} />
                            </SvgWraper>
                            <SvgWraper $visible={!Boolean(weekData[day].isCheck)}>
                                <IconSvg name='cross' fill={theme.color.text} />
                            </SvgWraper>
                            </CheckboxHandleValue>
                            </label>
                        <div>
                            <label>
                                <input
                                    type="number"
                                    name={`${name}.${day}.time[0].hour`}
                                    value={weekData[day].time[0].hour}
                                    min={0}
                                    max={23}
                                    onChange={(e) =>
                                        handleTimeChange(day, 0, "hour", Math.min(23, Math.max(0, Number(e.target.value))))
                                      }
                                />
                                </label>
                            :
                            <label>
                                <input
                                    type="number"
                                    name={`${name}.${day}.time[0].minute`}
                                    value={weekData[day].time[0].minute}
                                    min={0}
                                    max={59}
                                    onChange={(e) =>
                                        handleTimeChange(day, 0, "minute", Math.min(59, Math.max(0, Number(e.target.value))))
                                      }
                                />
                            </label>
                            {' - '}
                            <label>
                                <input
                                    type="number"
                                    name={`${name}.${day}.time[1].hour`}
                                    value={weekData[day].time[1].hour}
                                    min={0}
                                    max={23}
                                    onChange={(e) =>
                                        handleTimeChange(day, 1, "hour", Math.min(23, Math.max(0, Number(e.target.value))))
                                      }
                                />
                                </label>
                            :
                            <label>
                                <input
                                    type="number"
                                    name={`${name}.${day}.time[1].minute`}
                                    value={weekData[day].time[1].minute}
                                    min={0}
                                    max={59}
                                    onChange={(e) =>
                                        handleTimeChange(day, 1, "minute", Math.min(59, Math.max(0, Number(e.target.value))))
                                      }
                                />
                            </label>
                        </div>
                    </div>)
                })}
        </>
    );
};

export default WeekTime;