import React from "react";
import { useOrder } from '../../../context/Order/OrderContext';
import { AddProductForm, ClientForm, ModalConteiner } from '../..';
import { clientLabels, clientTypes, companyLabels, companyTypes } from '../../../context/Order/orderKeyof';
import { clientSchema, companySchema } from "../../../context/Order/formSchemas";

const ModalsOrder: React.FC = () => {
  const { addProduct, modals, modalState, order, updateInvoice } = useOrder();

  return (<>
    <ModalConteiner
      visible={modals.client}
      onExit={() => modalState('client')}
    >
      <ClientForm
        title="Zamawiający"
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
      visible={modals.company}
      onExit={() => modalState('company')}
    >
      <ClientForm
        title="Faktura"
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
      visible={modals.products}
      onExit={() => modalState('products')}
    >
      <AddProductForm
        onSubmit={modalValues => {
          addProduct(modalValues);
          modalState('products');
        }}
        key={modals.products ? 'open' : 'closed'}
      />
    </ModalConteiner>
  </>);
}

export default ModalsOrder;