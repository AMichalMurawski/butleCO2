import styled, { keyframes } from 'styled-components';
import { P } from '../../../styles';

interface ClientWraperProps {
  $autoMargin: 'left' | 'right';
}

export const ClientWraper = styled.div<ClientWraperProps>`
  position: relative;
  margin-inline: 4rem;
  ${({ $autoMargin }) => ($autoMargin === 'right' ? 'margin-right' : 'margin-left')}: auto;
  width: fit-content;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  & h3 {
    margin-bottom: 15px;
  }

  ${({ theme }) => theme.media.t} {
    gap: 0.35rem;
  }
`;

export const DataWraper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.t} {
    flex-direction: row;
  }
`;

interface DataNameProps {
  $width?: string;
}

export const DataName = styled(P)<DataNameProps>`
  color: ${({ theme }) => theme.color.structural};
  width: ${({ $width }) => ($width ? $width : 'auto')};
  min-width: ${({ $width }) => ($width ? $width : 'auto')};
`;

export const DataValueBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const DataValue = styled(P)`
  display: inline-block;
  height: 1.2rem;
  width: 20rem;
  align-self: end;
  font-style: italic;
  color: ${({ theme }) => theme.color.main};
  border-bottom: 2px dotted ${({ theme }) => theme.color.main};
  whiteSpace: 'pre-line';
  margin-left: 1rem;
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
  cursor: pointer;

  & svg {
    transform: translate(3px, 2px);
  }

  ${ClientWraper}:hover & {
    animation: ${write} 2s ease-in infinite;
  }
`;
