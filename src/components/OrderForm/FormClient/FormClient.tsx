import React from 'react';
import {
  ClientData,
  ClientName,
  ClientWraper,
  InvoiceClient,
  Subtitle,
  ViualText,
} from './FormClient.styled';

const FormClient: React.FC = () => {
  return (
    <InvoiceClient>
      <ClientWraper>
        <Subtitle>Zamawiający:</Subtitle>
        <ClientData>
          <ClientName>Imię i nazwisko / Nazwa firmy:</ClientName>
          <ViualText>Jan Kowalski</ViualText>
        </ClientData>
        <ClientData>
          <ClientName>Adres dostawy:</ClientName>
          <ViualText>Warszawska 11 lok. 11, 11-111 Warszawa</ViualText>
        </ClientData>
        <ClientData>
          <ClientName>Telefon kontaktowy:</ClientName>
          <ViualText>(11) 111 11 11</ViualText>
        </ClientData>
        <ClientData>
          <ClientName>E-mail:</ClientName>
          <ViualText>jan.kowalski@email.com</ViualText>
        </ClientData>
        <ClientData>
          <ClientName>Dodatkowe informacje odnośnie dostawy:</ClientName>
          <ViualText>Wejście od zaplecza, od ulicy Wrocławskiej</ViualText>
        </ClientData>
      </ClientWraper>
      <ClientWraper>
        <Subtitle>Dane do faktury:</Subtitle>
        <ClientData>
          <ClientName>Nazwa firmy:</ClientName>
          <ViualText>JanKow Piwa</ViualText>
        </ClientData>
        <ClientData>
          <ClientName>Ulica:</ClientName>
          <ViualText>Warszawska</ViualText>
        </ClientData>
        <ClientData>
          <ClientName>Nr:</ClientName>
          <ViualText>11</ViualText>
        </ClientData>
        <ClientData>
          <ClientName>Lokal:</ClientName>
          <ViualText>11</ViualText>
        </ClientData>
        <ClientData>
          <ClientName>Kod pocztowy:</ClientName>
          <ViualText>11-111</ViualText>
        </ClientData>
        <ClientData>
          <ClientName>Miasto:</ClientName>
          <ViualText>Warszawa</ViualText>
        </ClientData>
        <ClientData>
          <ClientName>NIP:</ClientName>
          <ViualText>123456789</ViualText>
        </ClientData>
      </ClientWraper>
    </InvoiceClient>
  );
};

export default FormClient;
