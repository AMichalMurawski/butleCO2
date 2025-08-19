import React from 'react';
import { HeaderTitle, HeaderWraper, InvoiceAddress, OrderNumber, Title } from './Header.styled';
import { P } from '../../../styles';
import { useConfig } from '../../../context/Config/ConfigContext';

const Header: React.FC = () => {
  const config = useConfig();

  return (
    <HeaderWraper>
      <HeaderTitle>
        <Title>Zamówienie</Title>
        <OrderNumber></OrderNumber>
      </HeaderTitle>
      <InvoiceAddress>
        <P>{config.name}</P>
        <P>
          ul. {config.street} {config.nr}
        </P>
        <P>
          {config.postalCode} {config.city}
        </P>
        <P>NIP: {config.NIP}</P>
      </InvoiceAddress>
    </HeaderWraper>
  );
};

export default Header;
