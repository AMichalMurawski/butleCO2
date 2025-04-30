import React from 'react';
import { Subtitle, DataWraper, DataName, DataValue, ClientWraper } from './Client.styled';
import IconEdit from './IconEdit';
import DataList from './DataList';

const clientInfoData = [
  {
    name: 'Imię i nazwisko / Nazwa firmy',
    value: 'Jan Kowalski',
  },
  {
    name: 'Adres dostawy',
    value: 'Warszawska 11 lok. 11, 11-111 Warszawa',
  },
  {
    name: 'Telefon kontaktowy',
    value: '(11) 111 11 11',
  },
  {
    name: 'E-mail',
    value: 'jan.kowalski@email.com',
  },
  {
    name: 'Dodatkowe informacje odnośnie dostawy',
    value: 'Wejście od zaplecza, od ulicy Wrocławskiej',
  },
];

const ClientInfo: React.FC = () => {
  return (
    <ClientWraper $autoMargin="right">
      <IconEdit />
      <Subtitle>Zamawiający:</Subtitle>
      <DataList width="200px" dataList={clientInfoData} />
    </ClientWraper>
  );
};

export default ClientInfo;
