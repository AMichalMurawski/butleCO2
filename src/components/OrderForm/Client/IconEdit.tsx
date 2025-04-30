import React from 'react';
import { EditIconWraper } from './Client.styled';
import IconSvg from '../../Icon/IconSvg';
import { theme } from '../../../styles/theme';

const IconEdit: React.FC = () => {
  return (
    <EditIconWraper>
      <IconSvg name="pencil" size="70%" fill={theme.color.structural} />
    </EditIconWraper>
  );
};

export default IconEdit;
