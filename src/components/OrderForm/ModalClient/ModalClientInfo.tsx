import React from 'react';
import {
  ClientInfoWraper,
  DataList,
  DataName,
  DataValue,
  DataWraper,
  ExitButtonConteiner,
  SubmitButtonConteiner,
  Subtitle,
  SubtitleWraper,
} from './ModalClient.styled';
import IconSvg from '../../Icon/IconSvg';
import Button from '../../Button/Button';
import { theme } from '../../../styles/theme';

export const clientInfoDataName = [
  ['Imię i nazwisko / Nazwa firmy', 'Jan Kowalski'],
  ['Ulica', 'Warszawska'],
  ['Nr', '11'],
  ['Lokal', '11'],
  ['Kod pocztowy', '11-111'],
  ['Miasto', 'Warszawa'],
  ['Telefon kontaktowy', '(11) 111 11 11'],
  ['E-mail', 'jan.kowalski@email.com'],
  ['Dodatkowe informacje', 'Wejście od zaplecza, od ulicy Wrocławskiej'],
];

interface ModalClientInfoProps {
  exitClick: () => void;
}

const ModalClientInfo: React.FC<ModalClientInfoProps> = ({ exitClick }) => {
  return (
    <ClientInfoWraper>
      <SubtitleWraper>
        <Subtitle>Zamawiający</Subtitle>
      </SubtitleWraper>
      <DataList>
        {clientInfoDataName.map((data, i) => (
          <DataWraper key={i}>
            <DataName>{data[0]}:</DataName>
            <DataValue>{data[1]}</DataValue>
          </DataWraper>
        ))}
        <SubmitButtonConteiner>
          <Button
            type="button"
            text="wprowadź dane"
            color={theme.color.structural}
            background={theme.color.remarkable}
            onClick={exitClick}
          />
        </SubmitButtonConteiner>
      </DataList>
    </ClientInfoWraper>
  );
};

export default ModalClientInfo;
