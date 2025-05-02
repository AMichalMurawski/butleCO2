import styled from 'styled-components';
import { H3, P } from '../../../styles/Global.styled';

export const ClientInfoWraper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  width: min(600px, 75%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: ${({ theme }) => theme.color.structural};
  background-color: ${({ theme }) => theme.color.text};
`;

export const SubtitleWraper = styled.div`
  width: 100%;
`;

export const Subtitle = styled(H3)``;

export const DataWraper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const DataName = styled(P)`
  min-width: max-content;
`;

export const ValueConteiner = styled.div`
  width: 100%;
`;

export const DataValue = styled(P)`
  position: relative;
  width: 100%;
  //   text-decoration: underline dotted;
  text-align: left;

  background-image: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent 1.4em,
    ${({ theme }) => theme.color.structuralTrans} 1.4em,
    ${({ theme }) => theme.color.textTrans} 1.5em
  );

  //   &::after {
  //     content: '';
  //     position: absolute;
  //     bottom: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 1px;
  //     border-bottom: 1px dotted ${({ theme }) => theme.color.structural};
  //     pointer-events: none;
  //   }
`;

export const ExitButtonConteiner = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:hover {
    scale: 1.2;
  }
`;

export const SubmitButtonConteiner = styled.div`
  margin-top: 30px;
  margin-left: auto;
`;
