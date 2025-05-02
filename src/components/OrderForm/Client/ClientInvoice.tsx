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

interface ClientInvoiceProps {
  onClick?: () => void;
}

const ClientInvoice: React.FC<ClientInvoiceProps> = ({ onClick }) => {
  return (
    <ClientWraper $autoMargin="left" onClick={onClick}>
      <IconEdit />
      <Subtitle>Dane do faktury:</Subtitle>
      <DataList width="100px" dataList={clientInvoiceData} />
    </ClientWraper>
  );
};

export default ClientInvoice;
