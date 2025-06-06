import React from 'react';
import { EditIconWraper } from './Client.styled';
import {IconSvg} from '../../';
import { useTheme } from 'styled-components';

const IconEdit: React.FC = () => {
  const theme = useTheme();

  return (
    <EditIconWraper>
      <IconSvg name="pencil" size="70%" fill={theme.color.structural} />
    </EditIconWraper>
  );
};

export default IconEdit;
