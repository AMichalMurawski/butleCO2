import React, { PropsWithChildren } from 'react';
import { ModalBox, ModalWraper } from './ModalConteiner.styled';

interface ModalConteinerProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const ModalConteiner: React.FC<PropsWithChildren<ModalConteinerProps>> = ({
  children,
  width,
  height,
  backgroundColor,
}) => {
  return (
    <ModalWraper>
      <ModalBox $width={width} $height={height} $backgroundColor={backgroundColor}>
        {children}
      </ModalBox>
    </ModalWraper>
  );
};

export default ModalConteiner;
