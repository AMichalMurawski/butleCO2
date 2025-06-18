import React, { PropsWithChildren, useEffect } from 'react';
import {
  ContentsWraper,
  ExitButtonConteiner,
  ModalBox,
  ModalWraper,
  TitleWraper,
} from './ModalConteiner.styled';
import { IconSvg } from '../../';
import { H3 } from '../../../styles/Global.styled';

interface ModalConteinerProps {
  width?: string;
  visible: boolean;
  title?: string;
  onExit?: () => void;
}

const ModalConteiner: React.FC<PropsWithChildren<ModalConteinerProps>> = ({
  children,
  visible,
  onExit,
  width,
  title,
}) => {
  const handleClick = (e: any) => {
    if (e.currentTarget === e.target && onExit) {
      onExit();
    }
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  return (
    <ModalWraper $visible={visible} onClick={handleClick}>
      <ModalBox $width={width} $visible={visible}>
        {title && (
          <TitleWraper>
            <H3>{title}</H3>
          </TitleWraper>
        )}
        <ContentsWraper>{children}</ContentsWraper>
        <ExitButtonConteiner onClick={handleClick}>
          <IconSvg name="cross" size='15px' fill="red" onClick={handleClick} />
        </ExitButtonConteiner>
      </ModalBox>
    </ModalWraper>
  );
};

export default ModalConteiner;
