import styled, { keyframes } from 'styled-components';
import { P } from '../../../styles';

interface ClientWraperProps {
  $autoMargin: 'left' | 'right';
}

export const ClientWraper = styled.div<ClientWraperProps>`
  position: relative;
  margin: ${({ $autoMargin }) => ($autoMargin === 'right' ? '0 auto 0 1rem' : '0 1rem 0 auto')};
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
    margin: ${({ $autoMargin }) => ($autoMargin === 'right' ? '0 auto 0 3rem' : '0 3rem 0 auto')};
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
  margin-left: 1rem;
  min-height: 1.6rem;
  width: 18rem;
  align-self: end;
  font-style: italic;
  whitespace: 'pre-wrap';
  line-height: 1.6em;
  color: ${({ theme }) => theme.color.main};
  background-image: repeating-radial-gradient(
    circle,
    ${({ theme }) => theme.color.main} 0 0.06rem,
    transparent 0.06rem 100%
  );
  background-size: 0.4em 1.6em; /* 6px co ile powtarza się kropka w poziomie, 1.2em wysokość linii */
  background-repeat: repeat;
  background-position: 0 2.2em;

  ${({ theme }) => theme.media.m} {
    width: 24rem;
  }

  ${({ theme }) => theme.media.d} {
    width: 28rem;
  }
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
