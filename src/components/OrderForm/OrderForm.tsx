import React from 'react';
import { InvoiceWraper, SubmitButtonWraper } from './OrderForm.styled';
import { Formik } from 'formik';
import { initialValues } from './initialValues';
import Button from '../../components/Button/Button';
import { theme } from '../../styles/theme';
import { ClientInfo, ClientInvoice, Header, Informations, ProductsList } from '.';

const OrderForm: React.FC = () => {
  const handleSubmit = () => {
    window.alert('Zamówienie złożone');
  };

  return (
    <Formik as={InvoiceWraper} initialValues={initialValues} onSubmit={handleSubmit}>
      <InvoiceWraper>
        <Header />
        <ClientInfo />
        <ClientInvoice />
        <ProductsList />
        <SubmitButtonWraper>
          <Button
            type="submit"
            onClick={handleSubmit}
            text="Złóż zamówienie"
            background={theme.color.remarkable}
            color={theme.color.structural}
          />
        </SubmitButtonWraper>
        <Informations />
      </InvoiceWraper>
    </Formik>
  );
};

export default OrderForm;
