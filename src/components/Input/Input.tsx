import React from 'react';
import { FieldStyled, InputWraper } from './Input.styled';
import { ErrorMessage, Field } from 'formik';

interface InputProps {
  name: string;
  type: string;
  atr?: object;
}

const Input: React.FC<InputProps> = ({ name, type, atr }) => {
  return (
    <InputWraper>
      <Field as={FieldStyled} name={name} type={type} {...atr}></Field>
      <ErrorMessage name={name} component="div" />
    </InputWraper>
  );
};

export default Input;
