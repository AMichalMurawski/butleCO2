import React from 'react';
import { ButtonWraper } from './Button.styled';
import { useTheme } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  active?: true | false;
  color?: string;
  background?: string;
}

const Button: React.FC<ButtonProps> = ({ text, active = false, color, background = 'transparent'}) => {
  const theme = useTheme()

  return <ButtonWraper active={active} background={background} color={color || theme.color.text}>{text}</ButtonWraper>;
};

export default Button;
