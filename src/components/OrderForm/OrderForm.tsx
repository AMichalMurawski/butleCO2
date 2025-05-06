import React, { useState } from 'react';
import { InvoiceWraper, SubmitButtonWraper } from './OrderForm.styled';
import { Formik, Form } from 'formik';
import { clientLabels, clientTypes, companyLabels, companyTypes, initialClient, initialCompany, initialValues } from './initialValues';
import Button from '../../components/Button/Button';
import { theme } from '../../styles/theme';
import { ClientInfo, ClientInvoice, Header, Informations, ProductsList } from '.';
import ModalConteiner from '../ModalConteiner/ModalConteiner';
import ModalAddProduct from './ModalAddProduct/ModalAddProduct';
import ModalClient from './ModalClient/ModalClient';

const OrderForm: React.FC = () => {
  const [infoModal, setInfoModal] = useState<boolean>(false);
  const [invoiceModal, setInvoiceModal] = useState<boolean>(false);
  const [orderModal, setOrderModal] = useState<boolean>(false);

  const closeModal = (modal: "info" | "invoice" | "order") => {
    
    if (modal === "info") {
      setInfoModal(false)
      return
    }
    
    if (modal === "invoice") {
      setInvoiceModal(false)
      return
    }
    
    if (modal === "order") {
      setOrderModal(false)
      return
    }
  }

  const handleSubmit = () => {
    
    setOrderModal(true)
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
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
            width='min(600px, 75%)'
            color={theme.color.structural}
            backgroundColor={theme.color.text}
            visible={infoModal}
            onClick={() => closeModal( "info")}
          >
            <ModalClient
              title="Zamawiający"
              labels={clientLabels}
              types={clientTypes}
              initialValues={initialClient}
              onSubmit={(values) => {
                setInfoModal(false); window.alert(JSON.stringify(values))
              }
              } />
          </ModalConteiner>
          <ModalConteiner
            width='min(600px, 75%)'
            color={theme.color.structural}
            backgroundColor={theme.color.text}
            visible={invoiceModal}
            onClick={() => closeModal( "invoice")}
          >
            <ModalClient
              title="Faktura"
              labels={companyLabels}
              types={companyTypes}
              initialValues={initialCompany}
              onSubmit={() => setInvoiceModal(false)} />
          </ModalConteiner>
          <ModalConteiner 
            width='min(600px, 75%)'
            color={theme.color.structural}
            backgroundColor={theme.color.text}
            visible={orderModal}
            onClick={() => closeModal("order")}>
            <ModalAddProduct />
          </ModalConteiner>
        </InvoiceWraper>
      </Form>
    </Formik>
  );
};

export default OrderForm;
