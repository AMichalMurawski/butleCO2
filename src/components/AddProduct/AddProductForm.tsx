import React, { useState } from 'react';
import { ProductProps } from '../../context/Order/orderProps';
import { productsList } from './productsList';
import IconSvg from '../Icons/IconSvg';
import { AddProductWraper, Description, DescriptionWraper, IconSvgWraper, ProductsList, ProductWraper, Title, TitleWraper, TransactionToggle } from './AddProductForm.styled';
import { useTheme } from 'styled-components';
import { useOrder } from '../../context/Order/OrderContext';
import { initialOrderProduct } from '../../context/Order/initialValues';
import Button from '../Button/Button';

interface ModalAddProductProps {
  onSubmit: (values: ProductProps[]) => void;
}

const ModalAddProduct: React.FC<ModalAddProductProps> = ({ onSubmit }) => {
  const theme = useTheme();
  const { order } = useOrder();
  const [buy, setBuy] = useState<boolean>(false)

  const handleClick = (value: ProductProps) => {
    const products = order.products;
    products.push({ ...initialOrderProduct, ...value, ...{ transaction: buy } });
    onSubmit(products);
  };

  return (
    <AddProductWraper>
      <TitleWraper>
        <Title>Wybierz produkty:</Title>
      </TitleWraper>
      <TransactionToggle>
        <Button
          type='button'
          text='Wymiana'
          background={!buy ? theme.color.remarkable : theme.color.remarkableTrans}
          color={!buy ? theme.color.structural : theme.color.text}
          onClick={() => {setBuy(false)}} />
        <Button
          type='button'
          text='Zakup'
          background={buy ? theme.color.remarkable : theme.color.remarkableTrans}
          color={buy ? theme.color.structural : theme.color.text}
          onClick={() => {setBuy(true)}} />
      </TransactionToggle>
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
