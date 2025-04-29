import React from 'react';
import {
  Informations,
  InformationsWraper,
  InvoiceWraper,
  SubmitButtonWraper,
} from './OrderForm.styled';
import { Formik } from 'formik';
import { initialValues } from './initialValues';
import Button from '../../components/Button/Button';
import { theme } from '../../styles/theme';
import { FormHeader, FormClient, FormProducts, FormInvoice } from '.';

const OrderForm: React.FC = () => {
  const handleSubmit = () => {
    window.alert('Zamówienie złożone');
  };

  return (
    <Formik as={InvoiceWraper} initialValues={initialValues} onSubmit={handleSubmit}>
      <InvoiceWraper>
        <FormHeader />
        <FormClient />
        <FormInvoice />
        <FormProducts />
        <SubmitButtonWraper>
          <Button
            type="submit"
            onClick={handleSubmit}
            text="Złóż zamówienie"
            background={theme.color.remarkable}
            color={theme.color.structural}
          />
        </SubmitButtonWraper>
        <InformationsWraper>
          <Informations>
            * Do ceny mogą być doliczone koszta za dostawę poza rejonem, jak również rabaty dla
            stałych klientów lub dużych zamówień.
          </Informations>
          <Informations>
            * Ostateczna cena zostanie przesłana drogą mailową wraz z potwierdzeniem zamówienia.
          </Informations>
        </InformationsWraper>
      </InvoiceWraper>
    </Formik>
  );
};

export default OrderForm;
