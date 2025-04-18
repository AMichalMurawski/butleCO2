import React, { useEffect, useRef } from 'react';
import { FieldStyled, InputWraper } from './Input.styled';
import { ErrorMessage, Field, FieldProps } from 'formik';

interface InputProps {
  name: string;
  type?: string;
  asType?: string;
  atr?: object;
}

const Input: React.FC<InputProps> = ({ name, type, asType, atr }) => {

  return (
    <InputWraper>
      <FieldStyled name={name} type={type} as={asType} {...atr}>
      </FieldStyled>
      <ErrorMessage name={name} component="div" />
    </InputWraper>
  );
};

export default Input;
