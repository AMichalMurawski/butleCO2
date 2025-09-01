import React from 'react';
import { ClientInvoiceWraper, InvoiceWraper, SubmitButtonWraper } from './Order.styled';
import { clientLabels, companyLabels } from '../../context/Order/orderKeyof';
import { Client, Header, Informations, ProductsList } from './';
import { Button } from '../';
import { useOrder } from '../../context/Order/OrderContext';
import { useTheme } from 'styled-components';

const Order: React.FC = () => {
  const { order, confirmOrder, modalState, updateInvoice } = useOrder();
  const theme = useTheme();

  return (
    <InvoiceWraper>
      <Header />
      <Client
        title="Zamawiający"
        labels={clientLabels}
        initialValues={order.client}
        onClick={() => modalState('client')}
        autoMargin="right"
        labelWidth="15rem"
      />
      <ClientInvoiceWraper $isInvoice={order.client.invoice}>
        <Client
          title="Faktura"
          labels={companyLabels}
          initialValues={order.company}
          onClick={() => modalState('company')}
          autoMargin="left"
          labelWidth="6.25rem"
        />
      </ClientInvoiceWraper>
      <ProductsList />
      <SubmitButtonWraper>
        <Button
          type="button"
          text="Złóż zamówienie"
          background={theme.color.remarkable}
          color={theme.color.structural}
          onClick={confirmOrder}
        />
      </SubmitButtonWraper>
      <Informations />
    </InvoiceWraper>
  );
};

export default Order;
