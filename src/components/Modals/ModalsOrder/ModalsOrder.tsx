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
    <ModalConteiner
      visible={modals.submit}
      onExit={() => modalState('submit')}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '100%' }}>
          <h3>Twoje zamówienie:</h3>
        </div>
        <div style={{ marginTop: '30px' }}>
          <div style={{ width: 'fit-content', textAlign:'left', marginRight:'auto' }}>
            <h4>Klient:</h4>
            <p>Imię i Nazwisko / Nazwa firmy: {order.client.name}</p>
            <p>Address dostawy: {order.client.address.street} {order.client.address.number}{order.client.address.local ? `lok. ${order.client.address.local}` : null} {order.client.address.postalCode} {order.client.address.city}</p>
            <p>Telefon kontaktowy: {order.client.phone}</p>
            <p>Email: {order.client.email}</p>
            <p>Informacje do dostawy: {order.client.message}</p>
          </div>
          {order.client.invoice && 
            (<div style={{width: 'fit-content', textAlign: 'left', marginLeft:'auto', marginTop:'15px'}}>
              <h4>Faktura:</h4>
              <p>Nazwa firmy: {order.company.name}</p>
              <p>Adres: {order.company.address.street} {order.company.address.number}{order.company.address.local ? `lok. ${order.company.address.local}` : null} {order.company.address.postalCode} {order.company.address.city}</p>
              <p>NIP: {order.company.NIP}</p>
            </div>)
          }
          <div style={{width: 'fit-content', textAlign:'left', marginRight:'auto', marginTop:'15px'}}>
            <h4>Lista butli:</h4>
            <p style={{fontWeight:'700'}}>wymiana:</p>
            {order.products.map(product => {
              if (product.transaction !== false) return <></>
              return <p>{product.type} {product.weight ? (`${product.weight} kg`) : (`${product.litr} l`)} {product.unitPrice}PLN x{product.amount}szt. = {product.price}PLN</p>
            }
            )}
            <p style={{ fontWeight: '700' }}>zakup:</p>
            {order.products.map(product => {
              if (product.transaction !== true) return <></>
              return <p>{product.type} {product.weight ? (`${product.weight} kg`) : (`${product.litr} l`)} {product.unitPrice}PLN x{product.amount}szt. = {product.price}PLN</p>
            }
            )}
          </div>
          <div style={{width: 'fit-content', textAlign: 'left', marginLeft:'auto', marginTop:'15px'}}>
            <h4>Całkowity koszt zamówienia:</h4>
            <p>Koszt butli: {order.summary.productsCost}PLN</p>
            <p>Koszt dostawy: {order.summary.deliveryCost}PLN</p>
            <p style={{fontWeight:'900'}}>Koszt zamówienia: {order.summary.summaryCost}PLN</p>
          </div>
        </div>
      </div>
    </ModalConteiner>
  </>);
}

export default ModalsOrder;