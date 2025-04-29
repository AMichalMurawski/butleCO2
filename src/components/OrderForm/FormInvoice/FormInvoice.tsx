import React from 'react';
import {
  Subtitle,
  FormWraper,
  DataWraper,
  DataName,
  DataValue,
} from '../ClientInvoiceStyled/FormData.styled';

const FormInvoice: React.FC = () => {
  return (
    <FormWraper $autoMargin="left">
      <Subtitle>Dane do faktury:</Subtitle>
      <DataWraper>
        <DataName $width="120px">Nazwa firmy:</DataName>
        <DataValue>JanKow Piwa</DataValue>
      </DataWraper>
      <DataWraper>
        <DataName $width="120px">Ulica:</DataName>
        <DataValue>Warszawska</DataValue>
      </DataWraper>
      <DataWraper>
        <DataName $width="120px">Nr:</DataName>
        <DataValue>11</DataValue>
      </DataWraper>
      <DataWraper>
        <DataName $width="120px">Lokal:</DataName>
        <DataValue>11</DataValue>
      </DataWraper>
      <DataWraper>
        <DataName $width="120px">Kod pocztowy:</DataName>
        <DataValue>11-111</DataValue>
      </DataWraper>
      <DataWraper>
        <DataName $width="120px">Miasto:</DataName>
        <DataValue>Warszawa</DataValue>
      </DataWraper>
      <DataWraper>
        <DataName $width="120px">NIP:</DataName>
        <DataValue>123456789</DataValue>
      </DataWraper>
    </FormWraper>
  );
};

export default FormInvoice;
