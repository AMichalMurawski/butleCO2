import styled, { keyframes } from 'styled-components';
import { H3, P } from '../../../styles/Global.styled';

interface ClientWraperProps {
  $autoMargin: 'left' | 'right';
}

export const ClientWraper = styled.div<ClientWraperProps>`
  position: relative;
  margin-inline: 60px;
  ${({ $autoMargin }) => ($autoMargin === 'right' ? 'margin-right' : 'margin-left')}: auto;
  min-width: 50%;
  max-width: 75%;
  width: fit-content;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
`;

export const Subtitle = styled(H3)`
  margin-bottom: 15px;
`;

export const DataWraper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  border-bottom: 2px dotted black;
`;

interface DataNameProps {
  $width?: string;
}

export const DataName = styled(P)<DataNameProps>`
  color: ${({ theme }) => theme.color.structural};
  width: ${({ $width }) => $width ? $width : 'auto'};
  min-width: ${({ $width }) => $width ? $width : 'auto'};
`;

export const DataValue = styled(P)`
  font-style: italic;
  // text-decoration: underline dotted;
  color: ${({ theme }) => theme.color.main};
`;

const write = keyframes`
  0% { transform: transalate(0px, 0px); }
  10% { transform: translate(-18px, 6px); }
  25% { transform: translate(-12px, 0px); }
  35% { transform: translate(-14px, 6px); }
  50% { transform: translate(-8px, 0px); }
  60% { transform: translate(-10px, 6px); }
  75% { transform: translate(-4px, 0px); }
  85% { transform: translate(-6px, 6px); }
  100% { transform: translate(0px, 0px); }
`;

export const EditIconWraper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  // background-color: ${({ theme }) => theme.color.remarkable};
  // border: 3px solid ${({ theme }) => theme.color.structural};
  cursor: pointer;

  & svg {
    transform: translate(3px, 2px);
  }

  ${ClientWraper}:hover & {
    // scale: 1.1;
    animation: ${write} 2s ease-in infinite;
  }
`;
