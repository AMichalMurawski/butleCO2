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
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 3rem;

  ${({ theme }) => theme.media.t} {
    grid-template-columns: calc(40% - 1rem) calc(60% - 1rem);
    grid-template-rows: repeat(3, auto);
  }
`;

interface GridWraperProps {
  $gridColumn: [number | string, number | string];
  $gridRow: [number | string, number | string];
  $marginLeft?: string;
}

export const GridWraper = styled.div<GridWraperProps>`
  grid-column: ${({ $gridColumn }) => $gridColumn[0]};
  grid-row: ${({ $gridRow }) => $gridRow[0]};

  ${({ theme }) => theme.media.t} {
    grid-column: ${({ $gridColumn }) => $gridColumn[1]};
    grid-row: ${({ $gridRow }) => $gridRow[1]};
  }
`;

export const InfoWraper = styled(GridWraper)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;
  max-width: 24rem;
  margin-inline: auto;
`;

export const InfoBox = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font: inherit;
  text-align: left;
`

export const Iframe = styled.iframe`
  width: 100%;
  height: 50vw;
  max-height: 650px;
`;
