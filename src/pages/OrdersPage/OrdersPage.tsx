import React from 'react';
import { Orders } from '../../sections';
import { OrderProvider } from '../../context/OrderContext';

const OrdersPage: React.FC = () => {
  return (
    <>
      <OrderProvider>
        <Orders />
      </OrderProvider>
    </>
  );
};

export default OrdersPage;
