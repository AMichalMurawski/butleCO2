import styled from 'styled-components';

export const ModalWraper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.mainTrans};
  scroll: false;
  z-index: 100;
`;

interface ModalBoxProps {
  $width?: string;
  $height?: string;
  $backgroundColor?: string;
}

export const ModalBox = styled.div<ModalBoxProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $width }) => $width || '50%'};
  height: ${({ $height }) => $height || '50%'};
  padding: 30px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme, $backgroundColor }) => $backgroundColor || theme.color.main};
`;
