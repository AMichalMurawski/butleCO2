import React from 'react';
import { Subtitle, DataWraper, DataName, DataValue, ClientWraper } from './Client.styled';

const ClientInvoice: React.FC = () => {
  return (
    <ClientWraper $autoMargin="left">
      <Subtitle>Dane do faktury:</Subtitle>
      <DataWraper>
        <DataName $width="120px">Nazwa firmy:</DataName>
        <DataValue>JanKow Piwa</DataValue>
      </DataWraper>
      <DataWraper>
        <DataName $width="120px">Adres:</DataName>
        <DataValue>Warszawska 11 lok. 11, 11-111 Warszawa</DataValue>
      </DataWraper>
      <DataWraper>
        <DataName $width="120px">NIP:</DataName>
        <DataValue>123456789</DataValue>
      </DataWraper>
    </ClientWraper>
  );
};

export default ClientInvoice;
