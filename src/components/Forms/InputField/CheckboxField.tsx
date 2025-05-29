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
import { ErrorMessage, useField } from 'formik';
import IconSvg from '../../Icons/IconSvg';
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
  const [field] = useField({ name, type: 'checkbox' });

  return (
    <DataWraper $flexDirection={flexDirection}>
      <DataName>{label}:</DataName>
      <ValueConteiner $width={valueWidth}>
        <CheckboxValueWraper>
          <CheckboxValue {...field} type="checkbox" />
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
