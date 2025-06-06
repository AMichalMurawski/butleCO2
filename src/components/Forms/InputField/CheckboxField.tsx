import React from 'react';
import {
  CheckboxHandleValue,
  CheckboxValue,
  CheckboxValueWraper,
  DataName,
  DataWraper,
  ErrorValue,
  SvgWraper,
  ValueConteiner,
} from './InputField.styled';
import { ErrorMessage, useField, useFormikContext } from 'formik';
import { IconSvg } from '../../';
import { useTheme } from 'styled-components';

interface CheckboxFieldProps {
  name: string;
  label: string;
  flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
  valueWidth?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  label,
  flexDirection = 'row',
  valueWidth = '100%',
}) => {
  const theme = useTheme();
  const { values, setFieldValue, validateField, setFieldTouched } = useFormikContext<any>();
  const [field] = useField({ name, type: 'checkbox' });

  const getValueFromPath = (obj: any, path: string): any => {
    const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    return parts.reduce((acc, key) => (acc ? acc[key] : undefined), obj);
  };

  const checked = getValueFromPath(values, name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    setFieldValue(name, isChecked, true);
    setFieldTouched(name, true, false);

    setTimeout(() => {
      validateField(name);
    }, 0);
  };

  return (
    <DataWraper $flexDirection={flexDirection}>
      <DataName>{label}:</DataName>
      <ValueConteiner $width={valueWidth}>
        <CheckboxValueWraper>
          <CheckboxValue {...field} type="checkbox" checked={checked} onChange={handleChange}  />
          <CheckboxHandleValue checked={field.value}>
            <SvgWraper $visible={field.value}>
              <IconSvg name="checkmark" fill={theme.color.text} />
            </SvgWraper>
            <SvgWraper $visible={!field.value}>
              <IconSvg name="cross" fill={theme.color.text} />
            </SvgWraper>
          </CheckboxHandleValue>
        </CheckboxValueWraper>
        <ErrorMessage component={ErrorValue} name={String(name)} />
      </ValueConteiner>
    </DataWraper>
  );
};

export default CheckboxField;
