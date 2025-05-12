import React, { createContext, useContext, useState, PropsWithChildren } from 'react';
import { OrderProps, initialValues } from './initialValues';

type OrderKeys = keyof OrderProps;

type updateSectionProps = (section: OrderKeys, value: OrderProps[OrderKeys]) => void;

interface OrderContextProps {
  order: OrderProps;
  updateSection: updateSectionProps;
  submitOrder: () => void;
  modals: Record<OrderKeys, boolean>;
  modalState: (modal: OrderKeys) => void;
}

const initialModals: Record<OrderKeys, boolean> = {
  client: false,
  company: false,
  products: false,
};

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [order, setOrder] = useState<OrderProps>(initialValues);
  const [modals, setModals] = useState<Record<OrderKeys, boolean>>(initialModals);

  const modalState = (modal: OrderKeys) => {
    setModals(prev => ({ ...prev, [modal]: !prev[modal] }));
  };

  const updateSection: updateSectionProps = (section, value) => {
    setOrder(prev => ({ ...prev, [section]: value }));
  };

  const submitOrder = () => {
    window.alert('Wysłano zamówienie: ' + JSON.stringify(order, null, 2));
  };

  return (
    <OrderContext.Provider value={{ order, updateSection, submitOrder, modals, modalState }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrder must be used within OrderProvider');
  return context;
};
