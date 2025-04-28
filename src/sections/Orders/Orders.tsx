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

const products = [
  { position: 1, name: 'Butla CO2 - 25l', quantity: 2, unitPrice: 100 },
  { position: 2, name: 'Butla CO2 - 10l', quantity: 1, unitPrice: 50 },
  { position: 3, name: 'Butla Argon - 8l', quantity: 5, unitPrice: 80 },
];

const Orders: React.FC = () => {
  const handleSubmit = () => {};

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
                  <TableFooterCell $sum>{totalCost.toFixed(2)} PLN</TableFooterCell>
                </TableRow>
              </TableFooter>
            </ProductsTable>
          </InvoiceProducts>
        </InvoiceWraper>
      </Formik>
    </OrderSection>
  );
};

export default Orders;
