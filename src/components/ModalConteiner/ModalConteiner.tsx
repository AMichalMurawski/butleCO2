import React, { PropsWithChildren } from 'react';
import { ModalBox, ModalWraper } from './ModalConteiner.styled';

interface ModalConteinerProps {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  visible: boolean;
  onClick?: (e: any) => void;
}

const ModalConteiner: React.FC<PropsWithChildren<ModalConteinerProps>> = ({
  children,
  width,
  height,
  color,
  backgroundColor,
  visible,
  onClick,
}) => {
  return (
    <ModalWraper $visible={visible} onClick={onClick}>
      <ModalBox $width={width} $height={height} $color={color} $backgroundColor={backgroundColor}>
        {children}
      </ModalBox>
    </ModalWraper>
  );
};

export default ModalConteiner;
