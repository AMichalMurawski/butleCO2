import React from 'react';
import { Orders } from '../../sections';
import { OrderProvider } from '../../context/Order/OrderContext';
import { ModalsOrder } from '../../components';

const OrdersPage: React.FC = () => {

  return (
    <OrderProvider>
      <Orders />
      <ModalsOrder />
    </OrderProvider>
  );
};

export default OrdersPage;
