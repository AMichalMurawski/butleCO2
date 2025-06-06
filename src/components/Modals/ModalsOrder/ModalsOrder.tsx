import React from "react";
import { useOrder } from '../../../context/Order/OrderContext';
import { ClientForm, ModalAddProduct, ModalConteiner, ModalConfirmOrder } from '../..';
import { clientLabels, clientTypes, companyLabels, companyTypes } from '../../../context/Order/orderKeyof';
import { clientSchema, companySchema } from "../../../context/Order/schema";

const ModalsOrder: React.FC = () => {
  const { addProduct, modals, modalState, order, updateInvoice } = useOrder();

  return (<>
    <ModalConteiner
      title='Zamawiający:'
      visible={modals.client}
      onExit={() => modalState('client')}
    >
      <ClientForm
        labels={clientLabels}
        types={clientTypes}
        initialValues={order.client}
        validationSchema={clientSchema}
        onSubmit={modalValues => {
          updateInvoice('client', modalValues);
          modalState('client');
        }}
        key={modals.client ? 'open' : 'closed'}
      />
    </ModalConteiner>
    <ModalConteiner
      title="Faktura"
      visible={modals.company}
      onExit={() => modalState('company')}
    >
      <ClientForm
        labels={companyLabels}
        types={companyTypes}
        initialValues={order.company}
        validationSchema={companySchema}
        onSubmit={modalValues => {
          updateInvoice('company', modalValues);
          modalState('company');
        }}
        key={modals.company ? 'open' : 'closed'}
      />
    </ModalConteiner>
    <ModalConteiner
      title='Wybierz produkt:'
      visible={modals.products}
      onExit={() => modalState('products')}
    >
      <ModalAddProduct
        onSubmit={modalValues => {
          addProduct(modalValues);
          modalState('products');
        }}
        key={modals.products ? 'open' : 'closed'}
      />
    </ModalConteiner>
    <ModalConteiner
      title='Twoje zamówienie:'
      visible={modals.confirm}
      onExit={() => modalState('confirm')}
    >
      <ModalConfirmOrder />
    </ModalConteiner>
  </>);
}

export default ModalsOrder;