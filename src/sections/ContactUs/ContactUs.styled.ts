import styled from 'styled-components';
import { Section } from '../../styles/Global.styled';

export const ContactSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContactsWraper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: calc(40% - 15px) calc(60% - 15px);
  grid-template-rows: repeat(3, auto);
  gap: 30px;
`;

interface GridWraperProps {
  $gridColumn: number | string;
  $gridRow: number | string;
  $marginLeft?: string;
}

export const GridWraper = styled.div<GridWraperProps>`
  grid-column: ${({ $gridColumn }) => $gridColumn};
  grid-row: ${({ $gridRow }) => $gridRow};
`;

export const InfoWraper = styled(GridWraper)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  font: inherit;
  text-align: left;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 600px;
`;
