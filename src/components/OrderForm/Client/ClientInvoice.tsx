import React from 'react';
import { Subtitle, DataWraper, DataName, DataValue, ClientWraper } from './Client.styled';
import IconEdit from './IconEdit';
import DataList from './DataList';

const clientInvoiceData = [
  {
    name: 'Nazwa firmy',
    value: 'JanKow Piwa',
  },
  {
    name: 'Adres',
    value: 'Warszawska 11 lok. 11, 11-111 Warszawa',
  },
  {
    name: 'NIP',
    value: '123456789',
  },
];

const ClientInvoice: React.FC = () => {
  const enterData = () => {
    window.alert('Podaj dane do faktury');
  };

  return (
    <ClientWraper $autoMargin="left" onClick={enterData}>
      <IconEdit />
      <Subtitle>Dane do faktury:</Subtitle>
      <DataList width="100px" dataList={clientInvoiceData} />
    </ClientWraper>
  );
};

export default ClientInvoice;
