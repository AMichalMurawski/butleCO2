import React from 'react';
import {
  Subtitle,
  FormWraper,
  DataWraper,
  DataName,
  DataValue,
} from '../ClientInvoiceStyled/FormData.styled';

const FormClient: React.FC = () => {
  return (
    <FormWraper $autoMargin="right">
      <Subtitle>Zamawiający:</Subtitle>
      <DataWraper>
        <DataName $width="200px">Imię i nazwisko / Nazwa firmy:</DataName>
        <DataValue>Jan Kowalski</DataValue>
      </DataWraper>
      <DataWraper>
        <DataName $width="200px">Adres dostawy:</DataName>
        <DataValue>Warszawska 11 lok. 11, 11-111 Warszawa</DataValue>
      </DataWraper>
      <DataWraper>
        <DataName $width="200px">Telefon kontaktowy:</DataName>
        <DataValue>(11) 111 11 11</DataValue>
      </DataWraper>
      <DataWraper>
        <DataName $width="200px">E-mail:</DataName>
        <DataValue>jan.kowalski@email.com</DataValue>
      </DataWraper>
      <DataWraper>
        <DataName $width="200px">Dodatkowe informacje odnośnie dostawy:</DataName>
        <DataValue>
          Wejście od zaplecza, od ulicy WrocławskiejWejście od zaplecza, od ulicy Wrocławskiej
          Wejście od zaplecza, od ulicy Wrocławskiej Wejście od zaplecza, od ulicy Wrocławskiej
        </DataValue>
      </DataWraper>
    </FormWraper>
  );
};

export default FormClient;
