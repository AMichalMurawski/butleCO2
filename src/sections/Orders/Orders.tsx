import React from 'react';
import { InvoiceWraper, OrderSection } from './Orders.styled';
import { Formik } from 'formik';
import { initialValues } from './initialValues';
import {
  Address,
  AddressWraper,
  HeaderTitle,
  InvoiceAddress,
  InvoiceHeader,
  OrderNumber,
  Title,
} from './InvoiceHeader.styled';
import { ClientData, ClientWraper, InvoiceClient, Subtitle } from './InvoiceClient.styled';

const Orders: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <OrderSection id="orders">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <InvoiceWraper>
          <InvoiceHeader>
            <HeaderTitle>
              <Title>Zamówienie</Title>
              <OrderNumber>nr: 542455789</OrderNumber>
            </HeaderTitle>
            <InvoiceAddress>
              <AddressWraper>
                <Address>ButleCO2.PL Artur Rembek</Address>
                <Address>ul. Poprawna 105A</Address>
                <Address>03-984 Warszawa</Address>
                <Address>NIP: 9522030252</Address>
              </AddressWraper>
            </InvoiceAddress>
          </InvoiceHeader>
          <InvoiceClient>
            <ClientWraper>
              <Subtitle>Zamawiający:</Subtitle>
              <ClientData>Imię i nazwisko / Nazwa firmy:</ClientData>
              <ClientData>Adres dostawy:</ClientData>
              <ClientData>Telefon kontaktowy:</ClientData>
              <ClientData>E-mail:</ClientData>
              <ClientData>Dodatkowe informacje odnośnie dostawy:</ClientData>
            </ClientWraper>
            <ClientWraper>
              <Subtitle>Dane do faktury:</Subtitle>
              <ClientData>Nazwa firmy:</ClientData>
              <ClientData>Ulica:</ClientData>
              <ClientData>Nr:</ClientData>
              <ClientData>Lokal:</ClientData>
              <ClientData>Kod pocztowy:</ClientData>
              <ClientData>Miasto:</ClientData>
              <ClientData>NIP:</ClientData>
            </ClientWraper>
          </InvoiceClient>
        </InvoiceWraper>
      </Formik>
    </OrderSection>
  );
};

export default Orders;
