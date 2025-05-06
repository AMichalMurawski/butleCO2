import React, { PropsWithChildren } from 'react';
import { ExitButtonConteiner, ModalBox, ModalWraper } from './ModalConteiner.styled';
import IconSvg from '../Icon/IconSvg';

interface ModalConteinerProps {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  visible: boolean;
  onClick?: () => void;
}

const ModalConteiner: React.FC<PropsWithChildren<ModalConteinerProps>> = ({
  children,
  visible,
  onClick,
  width
}) => {

  const handleClick = (e: any) => {
    if (e.currentTarget === e.target && onClick) {
      onClick()
    }
  }

  return (
    <ModalWraper $visible={visible} onClick={handleClick}>
      <ModalBox $width={width}>
        {children}
        <ExitButtonConteiner onClick={handleClick}>
          <IconSvg name="cross" fill="red" onClick={handleClick}/>
        </ExitButtonConteiner>
      </ModalBox>
    </ModalWraper>
  );
};

export default ModalConteiner;
