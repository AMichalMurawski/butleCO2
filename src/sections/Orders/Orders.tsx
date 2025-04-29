import React from 'react';
import { Informations, InformationsWraper, InvoiceWraper, OrderSection, SubmitButtonWraper } from './Orders.styled';
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
import { ClientData, ClientName, ClientWraper, InvoiceClient, Subtitle, ViualText } from './InvoiceClient.styled';
import {
  CellContent,
  InvoiceProducts,
  ProductsTable,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableFooter,
  TableFooterCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from './InvoiceProducts.styled';
import Button from '../../components/Button/Button';
import { theme } from '../../styles/theme';

const products = [
  { position: 1, name: 'Butla CO2 - 25l', quantity: 2, unitPrice: 100 },
  { position: 2, name: 'Butla CO2 - 10l', quantity: 1, unitPrice: 50 },
  { position: 3, name: 'Butla Argon - 8l', quantity: 5, unitPrice: 80 },
];

const Orders: React.FC = () => {
  const handleSubmit = () => {
    window.alert("Zamówienie złożone")
  };

  const totalCost = products.reduce(
    (sum, product) => sum + product.quantity * product.unitPrice,
    0
  );

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
          <InvoiceProducts>
            <ProductsTable>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>
                    <CellContent>Poz.</CellContent>
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <CellContent>Produkt</CellContent>
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <CellContent>Koszt jedn.</CellContent>
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <CellContent>Ilość</CellContent>
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <CellContent>Koszt</CellContent>
                  </TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map(product => (
                  <TableBodyRow key={product.position}>
                    <TableBodyCell>{product.position}</TableBodyCell>
                    <TableBodyCell>{product.name}</TableBodyCell>
                    <TableBodyCell>{product.unitPrice.toFixed(2)} PLN</TableBodyCell>
                    <TableBodyCell>{product.quantity}</TableBodyCell>
                    <TableBodyCell>
                      {(product.quantity * product.unitPrice).toFixed(2)} PLN
                    </TableBodyCell>
                  </TableBodyRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableFooterCell colSpan={3} />
                  <TableFooterCell $sum>Suma:</TableFooterCell>
                  <TableFooterCell $sum>{totalCost.toFixed(2)} PLN *</TableFooterCell>
                </TableRow>
              </TableFooter>
            </ProductsTable>
          </InvoiceProducts>
          <SubmitButtonWraper>
            <Button type='submit' onClick={handleSubmit} text='Złóż zamówienie' background={theme.color.remarkable} color={ theme.color.structural} />
          </SubmitButtonWraper>
          <InformationsWraper>
            <Informations>* Do ceny mogą być doliczone koszta za dostawę poza rejonem, jak również rabaty dla stałych klientów lub dużych zamówień.</Informations>
            <Informations>* Ostateczna cena zostanie przesłana drogą mailową wraz z potwierdzeniem zamówienia.</Informations>
          </InformationsWraper>
        </InvoiceWraper>
      </Formik>
    </OrderSection>
  );
};

export default Orders;
