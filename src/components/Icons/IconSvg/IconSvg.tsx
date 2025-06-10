import React from 'react';
import { Svg } from './IconSvg.styled';
import { useTheme } from 'styled-components';

interface IconProps {
  name: string;
  size?: string;
  fill?: string;
  onClick?: (e: any) => void;
}

const IconSvg: React.FC<IconProps> = ({ name, size = '100%', fill, onClick }) => {
  const theme = useTheme();

  return (
    <Svg
      viewBox="0 0 32 32"
      x="32"
      y="32"
      xmlns="http://www.w3.org/2000/svg"
      $size={size}
      $fill={fill || theme.color.hightlight}
      onClick={onClick}
    >
      <use xlinkHref={`/icons.svg#icon-${name}`} onClick={onClick} />
    </Svg>
  );
};

export default IconSvg;
