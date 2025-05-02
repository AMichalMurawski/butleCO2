import React, { useState } from 'react';
import { InvoiceWraper, SubmitButtonWraper } from './OrderForm.styled';
import { Formik } from 'formik';
import { initialValues } from './initialValues';
import Button from '../../components/Button/Button';
import { theme } from '../../styles/theme';
import { ClientInfo, ClientInvoice, Header, Informations, ProductsList } from '.';
import ModalConteiner from '../ModalConteiner/ModalConteiner';
import ModalClientInfo from './ModalClient/ModalClientInfo';
import ModalClientInvoice from './ModalClient/ModalClientInvoice';

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
          <ModalConteiner
            color={theme.color.structural}
            backgroundColor={theme.color.text}
            visible={infoModal}
            onClick={closeInfo}
          >
            <ModalClientInfo exitClick={() => setInfoModal(false)} />
          </ModalConteiner>
          <ModalConteiner
            color={theme.color.structural}
            backgroundColor={theme.color.text}
            visible={invoiceModal}
            onClick={closeInvoice}
          >
            <ModalClientInvoice exitClick={() => setInvoiceModal(false)} />
          </ModalConteiner>
        </InvoiceWraper>
      </Formik>
    </InvoiceWraper>
  );
};

export default OrderForm;
