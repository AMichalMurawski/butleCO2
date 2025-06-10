import React from 'react';
import { OrderSection } from './Orders.styled';
import { Order } from '../../components';

const Orders: React.FC = () => {
  return (
    <OrderSection id="orders">
      <Order />
    </OrderSection>
  );
};

export default Orders;
