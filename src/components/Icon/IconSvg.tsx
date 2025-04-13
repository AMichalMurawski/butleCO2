import React from 'react';
import icons from '/icons.svg';
import { Svg } from './IconSvg.styled';

interface IconProps {
  name: string;
  size?: string;
  fill?: string;
}

const IconSvg: React.FC<IconProps> = ({ name, size = '100%', fill }) => {
  return (
    <Svg
      viewBox="0 0 32 32"
      x="32"
      y="32"
      xmlns="http://www.w3.org/2000/svg"
      $size={size}
      $fill={fill}
    >
      <use xlinkHref={`/icons.svg#icon-${name}`} />
    </Svg>
  );
};

export default IconSvg;
