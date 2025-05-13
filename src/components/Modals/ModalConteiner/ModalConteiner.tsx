import React, { PropsWithChildren } from 'react';
import { ExitButtonConteiner, ModalBox, ModalWraper } from './ModalConteiner.styled';
import IconSvg from '../../Icons/IconSvg';

interface ModalConteinerProps {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  visible: boolean;
  onExit?: () => void;
}

const ModalConteiner: React.FC<PropsWithChildren<ModalConteinerProps>> = ({
  children,
  visible,
  onExit,
  width
}) => {

  const handleClick = (e: any) => {
    if (e.currentTarget === e.target && onExit) {
      onExit()
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
