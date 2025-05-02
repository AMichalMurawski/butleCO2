import styled from 'styled-components';

interface ModalWraperProps {
  $visible?: boolean;
}

export const ModalWraper = styled.div<ModalWraperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
  $color?: string;
  $backgroundColor?: string;
}

export const ModalBox = styled.div<ModalBoxProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || 'auto'};
  padding: 30px;
  transform: translate(-50%, -50%);
  color: ${({ theme, $color }) => $color || theme.color.text};
  background-color: ${({ theme, $backgroundColor }) => $backgroundColor || theme.color.main};
`;
