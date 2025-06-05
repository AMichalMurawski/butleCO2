import React from 'react';
import { ClientInvoiceWraper, InvoiceWraper, SubmitButtonWraper } from './Order.styled';
import { clientLabels, companyLabels } from '../../context/Order/orderKeyof';
import { theme } from '../../styles/theme';
import { Client, Header, Informations, ProductsList } from './';
import { Button, } from '../';
import { useOrder } from '../../context/Order/OrderContext';

const Order: React.FC = () => {
  const { order, confirmOrder, modalState } = useOrder();

  return (
    <InvoiceWraper>
      <Header />
      <Client
        title="Zamawiający"
        labels={clientLabels}
        initialValues={order.client}
        onClick={() => modalState('client')}
        autoMargin="right"
        labelWidth="200px"
      />
      <ClientInvoiceWraper $isInvoice={order.client.invoice}>
        <Client
          title="Faktura"
          labels={companyLabels}
          initialValues={order.company}
          onClick={() => modalState('company')}
          autoMargin="left"
          labelWidth="100px"
        />
      </ClientInvoiceWraper>
      <ProductsList addProduct={() => modalState('products')} />
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
