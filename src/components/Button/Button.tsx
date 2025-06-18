import React from 'react';
import { ButtonElement } from './Button.styled';
import { useTheme } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  active?: true | false;
  color?: string;
  background?: string;
  onClick?: any;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  text,
  active = false,
  color,
  background = 'transparent',
  onClick,
  type = 'button',
}) => {
  const theme = useTheme();

  return (
    <ButtonElement
      $active={active}
      $background={background}
      $color={color || theme.color.text}
      onClick={onClick}
      type={type}
    >
      {text}
    </ButtonElement>
  );
};

export default Button;
