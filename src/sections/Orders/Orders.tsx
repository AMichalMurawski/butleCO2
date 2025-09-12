import React from 'react';
import { Order } from '../../components';
import { Section } from '../../styles';

const Orders: React.FC = () => {
  return (
    <Section id="zamowienia">
      <Order />
    </Section>
  );
};

export default Orders;
