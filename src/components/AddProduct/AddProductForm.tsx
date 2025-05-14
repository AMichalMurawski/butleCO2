import React from 'react';
import { ProductProps } from '../../context/Order/orderProps';
import { productsList } from './productsList';
import IconSvg from '../Icons/IconSvg';
import { AddProductWraper, Description, DescriptionWraper, IconSvgWraper, ProductsList, ProductWraper, Title } from './AddProductForm.styled';
import { useTheme } from 'styled-components';
import { useOrder } from '../../context/Order/OrderContext';
import { initialOrderProduct } from '../../context/Order/initialValues';

interface ModalAddProductProps {
  onSubmit: (values: ProductProps[]) => void;
}

const ModalAddProduct: React.FC<ModalAddProductProps> = ({ onSubmit }) => {
  const theme = useTheme();
  const { order } = useOrder();

  const handleClick = (value: ProductProps) => {
    const products = order.products;
    products.push({...initialOrderProduct, ...value});
    onSubmit(products);
  };

  return (
    <AddProductWraper>
      <Title>Wybierz produkty:</Title>
      <ProductsList>
        {productsList.map(product => {
          const type = `${product.type} ${product.weight ? product.weight + 'kg' : ''}${product.litr ? product.litr + 'l' : ''}`;

          return (
            <ProductWraper key={type} onClick={() => handleClick(product)}>
              <IconSvgWraper>
                <IconSvg name="gas-cylinder" size="180px" fill={theme.color.structuralTrans} />
              </IconSvgWraper>
              <DescriptionWraper>
                <Description>{product.type}</Description>
                <Description>
                  {product.weight ? product.weight + ' kg' : ''}
                  {product.litr ? product.litr + ' l' : ''}
                </Description>
                <Description>{product.unitPrice} PLN</Description>
              </DescriptionWraper>
            </ProductWraper>
          );
        })}
      </ProductsList>
    </AddProductWraper>
  );
};

export default ModalAddProduct;
