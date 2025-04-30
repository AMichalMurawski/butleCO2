import styled from 'styled-components';
import { H3, P } from '../../../styles/Global.styled';

interface ClientWraperProps {
  $autoMargin: 'left' | 'right';
}

export const ClientWraper = styled.div<ClientWraperProps>`
  position: relative;
  padding-inline: 60px;
  ${({ $autoMargin }) => ($autoMargin === 'right' ? 'margin-right' : 'margin-left')}: auto;
  min-width: 50%;
  max-width: 75%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  $width: string;
}

export const DataName = styled(P)<DataNameProps>`
  color: ${({ theme }) => theme.color.structural};
  width: ${({ $width }) => $width};
  min-width: ${({ $width }) => $width};
`;

export const DataValue = styled(P)`
  font-style: italic;
  // text-decoration: underline dotted;
  color: ${({ theme }) => theme.color.main};
`;

export const EditIconWraper = styled.div`
  position: absolute;
  top: 0;
  right: 55px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  // background-color: ${({ theme }) => theme.color.remarkable};
  border: 3px solid ${({ theme }) => theme.color.structural};
  cursor: pointer;

  & svg {
    transform: translate(3px, 2px);
  }

  &:hover {
    scale: 1.2;
  }
`;
