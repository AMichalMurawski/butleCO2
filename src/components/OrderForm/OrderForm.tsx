import React, { useState } from 'react';
import { InvoiceWraper, SubmitButtonWraper } from './OrderForm.styled';
import { Formik } from 'formik';
import { initialValues } from './initialValues';
import Button from '../../components/Button/Button';
import { theme } from '../../styles/theme';
import { ClientInfo, ClientInvoice, Header, Informations, ProductsList } from '.';
import ModalConteiner from '../ModalConteiner/ModalConteiner';

const OrderForm: React.FC = () => {
  const [infoModal, setInfoModal] = useState<boolean>(false);
  const [invoiceModal, setInvoiceModal] = useState<boolean>(false);

  const closeInfo = (e: any) => {
    e.currentTarget === e.target ? setInfoModal(false) : null;
  };

  const closeInvoice = (e: any) => {
    e.currentTarget === e.target ? setInvoiceModal(false) : null;
  };

  const handleSubmit = () => {
    window.alert('Zamówienie złożone');
  };

  return (
    <InvoiceWraper>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <InvoiceWraper>
          <Header />
          <ClientInfo onClick={() => setInfoModal(true)} />
          <ClientInvoice onClick={() => setInvoiceModal(true)} />
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
          <ModalConteiner visible={infoModal} onClick={closeInfo}>
            Client Info Modal
          </ModalConteiner>
          <ModalConteiner visible={invoiceModal} onClick={closeInvoice}>
            Client Invoice Modal
          </ModalConteiner>
        </InvoiceWraper>
      </Formik>
    </InvoiceWraper>
  );
};

export default OrderForm;
