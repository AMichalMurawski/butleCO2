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
  ['Nazwa firmy', 'JanKow Piwa'],
  ['Ulica', 'Warszawska'],
  ['Nr', '11'],
  ['Lokal', '11'],
  ['Kod pocztowy', '11-111'],
  ['Miasto', 'Warszawa'],
  ['NIP', '123456789'],
];

interface ModalClientInvoiceProps {
  exitClick: () => void;
}

const ModalClientInvoice: React.FC<ModalClientInvoiceProps> = ({ exitClick }) => {
  return (
    <ClientInfoWraper>
      <SubtitleWraper>
        <Subtitle>Faktura</Subtitle>
      </SubtitleWraper>
      <DataList >
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

export default ModalClientInvoice;
