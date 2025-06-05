import React from 'react';
import {
  Address,
  AddressWraper,
  HeaderTitle,
  HeaderWraper,
  InvoiceAddress,
  OrderNumber,
  Title,
} from './Header.styled';

const Header: React.FC = () => {
  return (
    <HeaderWraper>
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
    </HeaderWraper>
  );
};

export default Header;
