import React from 'react';
import { OrderSection } from './Orders.styled';
import OrderForm from '../../components/OrderForm/OrderForm';

const Orders: React.FC = () => {
  return (
    <OrderSection id="orders">
      <OrderForm />
    </OrderSection>
  );
};

export default Orders;
