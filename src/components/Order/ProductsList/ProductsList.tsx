import React from 'react';
import { ProductsListBox, ProductsListWraper } from './ProductsList.styled';
import ProductsSummary from './ProductsSummary';
import { useOrder } from '../../../context/Order/OrderContext';
import Product from './Product';

const ProductsList: React.FC = () => {
  const { order } = useOrder();

  return (
    <ProductsListWraper>
      <ProductsListBox>
        {order.products.map((product, i) => {
          return <Product key={i} product={product} position={i} />;
        })}
        <Product key={'add'} product="" position={-1} />
      </ProductsListBox>
      <ProductsSummary />
    </ProductsListWraper>
  );
};

export default ProductsList;
