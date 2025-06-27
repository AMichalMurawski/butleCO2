import React from 'react';
import {
  HeaderTitle,
  HeaderWraper,
  InvoiceAddress,
  OrderNumber,
  Title,
} from './Header.styled';
import { P } from '../../../styles';

const Header: React.FC = () => {
  return (
    <HeaderWraper>
      <HeaderTitle>
        <Title>Zamówienie</Title>
        <OrderNumber></OrderNumber>
      </HeaderTitle>
      <InvoiceAddress>
        <div>
          <P>ButleCO2.PL Artur Rembek</P>
          <P>ul. Poprawna 105A</P>
          <P>03-984 Warszawa</P>
          <P>NIP: 9522030252</P>
        </div>
      </InvoiceAddress>
    </HeaderWraper>
  );
};

export default Header;
