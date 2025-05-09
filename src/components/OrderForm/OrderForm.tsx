import React, { useState } from 'react';
import { ClientInvoiceWraper, InvoiceWraper, SubmitButtonWraper } from './OrderForm.styled';
import { Formik, Form } from 'formik';
import {
  clientLabels,
  clientTypes,
  companyLabels,
  companyTypes,
  initialValues,
} from './initialValues';
import Button from '../../components/Button/Button';
import { theme } from '../../styles/theme';
import { Header, Informations, ProductsList } from '.';
import ModalConteiner from '../ModalConteiner/ModalConteiner';
import ModalAddProduct from './ModalAddProduct/ModalAddProduct';
import ModalClient from './ModalClient/ModalClient';
import Client from './Client/Client';

const OrderForm: React.FC = () => {
  const [infoModal, setInfoModal] = useState<boolean>(false);
  const [invoiceModal, setInvoiceModal] = useState<boolean>(false);
  const [orderModal, setOrderModal] = useState<boolean>(false);

  const closeModal = (setModal: any) => {
    setModal(false);
  };

  const handleSubmit = (e: any) => {
    window.alert('Wysłanie zamówienia');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => {
        const onModal = (
          object: 'client' | 'company' | 'products',
          modalValues: any,
          setModal: any
        ) => {
          Object.entries(modalValues).forEach(([key, value]) => {
            setFieldValue(`${object}.${key}`, value);
          });
          setModal(false);
        };

        return (
          <Form>
            <InvoiceWraper>
              <Header />
              <Client
                title="Zamawiający"
                labels={clientLabels}
                initialValues={values.client}
                onClick={() => setInfoModal(true)}
                autoMargin="right"
                labelWidth="200px"
              />
              <ClientInvoiceWraper $isInvoice={values.client.invoice}>
                <Client
                  title="Faktura"
                  labels={companyLabels}
                  initialValues={values.company}
                  onClick={() => setInvoiceModal(true)}
                  autoMargin="left"
                  labelWidth="100px"
                />
              </ClientInvoiceWraper>
              <ProductsList addProduct={() => setOrderModal(true)} />
              <SubmitButtonWraper>
                <Button
                  type="submit"
                  text="Złóż zamówienie"
                  background={theme.color.remarkable}
                  color={theme.color.structural}
                />
              </SubmitButtonWraper>
              <Informations />
              <ModalConteiner
                width="min(600px, 75%)"
                color={theme.color.structural}
                backgroundColor={theme.color.text}
                visible={infoModal}
                onClick={() => closeModal(setInfoModal)}
              >
                <ModalClient
                  title="Zamawiający"
                  labels={clientLabels}
                  types={clientTypes}
                  initialValues={values.client}
                  onSubmit={modalValues => onModal('client', modalValues, setInfoModal)}
                  key={infoModal ? 'open' : 'closed'}
                />
              </ModalConteiner>
              <ModalConteiner
                width="min(600px, 75%)"
                color={theme.color.structural}
                backgroundColor={theme.color.text}
                visible={invoiceModal}
                onClick={() => closeModal(setInvoiceModal)}
              >
                <ModalClient
                  title="Faktura"
                  labels={companyLabels}
                  types={companyTypes}
                  initialValues={values.company}
                  onSubmit={modalValues => onModal('company', modalValues, setInvoiceModal)}
                  key={invoiceModal ? 'open' : 'closed'}
                />
              </ModalConteiner>
              <ModalConteiner
                width="min(600px, 75%)"
                color={theme.color.structural}
                backgroundColor={theme.color.text}
                visible={orderModal}
                onClick={() => closeModal(setOrderModal)}
              >
                <ModalAddProduct
                  onSubmit={modalValues => onModal('products', modalValues, setOrderModal)}
                />
              </ModalConteiner>
            </InvoiceWraper>
          </Form>
        );
      }}
    </Formik>
  );
};

export default OrderForm;
