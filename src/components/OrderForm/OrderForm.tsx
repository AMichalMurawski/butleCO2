import React from 'react';
import { ClientInvoiceWraper, InvoiceWraper, SubmitButtonWraper } from './OrderForm.styled';
import {
  clientLabels,
  clientTypes,
  companyLabels,
  companyTypes,
} from '../../context/initialValues';
import Button from '../../components/Button/Button';
import { theme } from '../../styles/theme';
import { Header, Informations, ProductsList } from '.';
import ModalConteiner from '../ModalConteiner/ModalConteiner';
import ModalAddProduct from './ModalAddProduct/ModalAddProduct';
import ModalClient from './ModalClient/ModalClient';
import Client from './Client/Client';
import { useOrder } from '../../context/OrderContext';

const OrderForm: React.FC = () => {
  const { order, submitOrder, updateSection, modals, modalState } = useOrder();

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
          onClick={submitOrder}
        />
      </SubmitButtonWraper>
      <Informations />
      <ModalConteiner
        width="min(600px, 75%)"
        color={theme.color.structural}
        backgroundColor={theme.color.text}
        visible={modals.client}
        onClick={() => modalState('client')}
      >
        <ModalClient
          title="Zamawiający"
          labels={clientLabels}
          types={clientTypes}
          initialValues={order.client}
          onSubmit={modalValues => {
            updateSection('client', modalValues);
            modalState('client');
          }}
          key={modals.client ? 'open' : 'closed'}
        />
      </ModalConteiner>
      <ModalConteiner
        width="min(600px, 75%)"
        color={theme.color.structural}
        backgroundColor={theme.color.text}
        visible={modals.company}
        onClick={() => modalState('company')}
      >
        <ModalClient
          title="Faktura"
          labels={companyLabels}
          types={companyTypes}
          initialValues={order.company}
          onSubmit={modalValues => {
            updateSection('company', modalValues);
            modalState('company');
          }}
          key={modals.company ? 'open' : 'closed'}
        />
      </ModalConteiner>
      <ModalConteiner
        width="min(600px, 75%)"
        color={theme.color.structural}
        backgroundColor={theme.color.text}
        visible={modals.products}
        onClick={() => modalState('products')}
      >
        <ModalAddProduct
          onSubmit={modalValues => {
            modalState('products');
            updateSection('products', modalValues);
          }}
        />
      </ModalConteiner>
    </InvoiceWraper>
  );
};

export default OrderForm;
