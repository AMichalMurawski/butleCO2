import styled from 'styled-components';
import { H3 } from '../../../styles/Global.styled';

interface ModalWraperProps {
  $visible?: boolean;
}

export const ModalWraper = styled.div<ModalWraperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.mainTrans};
  scroll: false;
  z-index: 900;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};

  transition:
    visibility ease-in-out 300ms,
    opacity ease-in-out 300ms;
`;

interface ModalBoxProps {
  $width?: string;
  $height?: string;
  $maxHeight?: string;
  $color?: string;
  $backgroundColor?: string;
  $visible?: boolean;
}

export const ModalBox = styled.div<ModalBoxProps>`
  position: absolute;
  top: ${({ $visible }) => ($visible ? '50%' : '100vh')};
  left: 50%;
  width: ${({ $width }) => $width || 'min(600px, 75%)'};
  height: ${({ $height }) => $height || null};
  max-height: ${({ $maxHeight }) => $maxHeight || '90%'};
  color: ${({ $color, theme }) => ($color ? $color : theme.color.structural)};
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor ? $backgroundColor : theme.color.text};
  transform: translate(-50%, -50%);
  // overflow-y: hidden;
  transition: top ease-in-out 300ms;
  max-height: 75vh;
  display: flex;
  flex-direction: column;
`;

export const TitleWraper = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.color.structural};
  color: ${({ theme }) => theme.color.text};

  & *{
    margin: 0;
  }
`;

export const ContentsWraper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`;

export const ExitButtonConteiner = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    scale: 1.2;
  }
`;
