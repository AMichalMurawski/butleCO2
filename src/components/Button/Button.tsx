import React from 'react';
import { ButtonWraper } from './Button.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  active?: true | false;
}

const Button: React.FC<ButtonProps> = ({ text, active = false }) => {
  

  return <ButtonWraper active={active}>{text}</ButtonWraper>;
};

export default Button;
