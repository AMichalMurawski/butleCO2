import styled from 'styled-components';
import { Section } from '../../styles';

export const ContactSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContactsWraper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: calc(40% - 1rem) calc(60% - 1rem);
  grid-template-rows: repeat(3, auto);
  gap: 2rem;
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
  gap: 1rem;
  font: inherit;
  text-align: left;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 50vw;
  max-height: 650px;
`;
