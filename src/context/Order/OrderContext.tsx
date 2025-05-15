import React, { createContext, useContext, useState, PropsWithChildren } from 'react';
import { initialValues } from './initialValues';
import { ClientProps, OrderProductProps, OrderProps } from './orderProps';

type OrderKeys = keyof OrderProps;

type updateInvoiceProps = <K extends 'client' | 'company'>(section: K, value: OrderProps[K]) => void;

interface OrderContextProps {
  addProduct: (product: OrderProductProps) => void;
  deleteProduct: (index: number) => void;
  modals: Record<OrderKeys, boolean>;
  modalState: (modal: OrderKeys) => void;
  order: OrderProps;
  productAmountChange: (index: number, amount: number) => void;
  submitOrder: () => void;
  updateInvoice: updateInvoiceProps;
}

const initialModals: Record<OrderKeys, boolean> = {
  client: false,
  company: false,
  products: false,
  summary: false,
};

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [order, setOrder] = useState<OrderProps>(initialValues);
  const [modals, setModals] = useState<Record<OrderKeys, boolean>>(initialModals);

  const modalState = (modal: OrderKeys) => {
    setModals(prev => ({ ...prev, [modal]: !prev[modal] }));
  };

  const updateInvoice: updateInvoiceProps = (section, value) => {
    setOrder(prev => ({ ...prev, [section]: value }));
  }

  const addProduct = (product: OrderProductProps) => {
    const products = [...order.products, product];
    
    changeProductsList(products)
  }

  const productAmountChange = (index: number, amount: number) => {
    const products = [...order.products];
    products[index].amount = amount;
    products[index].price = amount * products[index].unitPrice;
    
    changeProductsList(products);
  }

  const deleteProduct = (index: number) => {
    const products = [...order.products];
    products.splice(index, 1);

    changeProductsList(products)
  }

  const changeProductsList = (products: OrderProductProps[]) => {
    let productsCost = products.reduce((sum, prod) => sum = sum + prod.price, 0);
    if (productsCost < 100) productsCost = 100;
    const summaryCost = productsCost + order.summary.deliveryCost;
    const summary = { ...order.summary, productsCost, summaryCost };
    
    setOrder(prev => ({ ...prev, products, summary }));
  }

  // const updateSection: updateSectionProps = (section, value) => {
  //   setOrder(prev => ({ ...prev, [section]: value }));
  // };

  const submitOrder = () => {
    window.alert('Wysłano zamówienie: ' + JSON.stringify(order, null, 2));
  };

  return (
    <OrderContext.Provider value={{ addProduct, deleteProduct, modals, modalState, order, productAmountChange, submitOrder, updateInvoice, }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrder must be used within OrderProvider');
  return context;
};
