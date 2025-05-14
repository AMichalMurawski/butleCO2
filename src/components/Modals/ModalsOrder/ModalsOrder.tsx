import React from "react";
import { useOrder } from '../../../context/Order/OrderContext';
import { AddProductForm, ClientForm, ModalConteiner } from '../..';
import { clientLabels, clientTypes, companyLabels, companyTypes } from '../../../context/Order/orderKeyof';

const ModalsOrder: React.FC = () => {
  const { modals, modalState, order, updateSection } = useOrder();

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
        onSubmit={modalValues => {
          updateSection('client', modalValues);
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
        onSubmit={modalValues => {
          updateSection('company', modalValues);
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
          modalState('products');
          updateSection('products', modalValues);
        }}
      />
    </ModalConteiner>
  </>);
}

export default ModalsOrder;