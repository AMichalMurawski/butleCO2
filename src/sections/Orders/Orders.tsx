import React from 'react';
import { OrderSection } from './Orders.styled';
import { Formik } from 'formik';
import { initialValues } from './initialValues';

const Orders: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <OrderSection id="orders">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}></Formik>
    </OrderSection>
  );
};

export default Orders;
