import React from 'react';
import { ButtonWraper } from './Button.styled';
import { useTheme } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  active?: true | false;
  color?: string;
  background?: string;
  idSection?: string;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  active = false,
  color,
  background = 'transparent',
  idSection = '',
  onClick,
}) => {
  const theme = useTheme();

  const scrollToSection = () => {
    const section = document.getElementById(idSection);
    section?.scrollIntoView({ behavior: 'smooth' });
    if (section && idSection) {
      window.history.pushState(null, '', `#${idSection}`)
      onClick?.()
    }
  };

  return (
    <ButtonWraper
      $active={active}
      $background={background}
      $color={color || theme.color.text}
      onClick={scrollToSection}
    >
      {text}
    </ButtonWraper>
  );
};

export default Button;
