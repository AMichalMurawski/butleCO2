import React, { useEffect, useState } from 'react';
import { OrderProductProps, ProductProps } from '../../../context/Order/orderProps';
import { productsList } from './productsList';
import IconSvg from '../../Icons/IconSvg';
import {
  Description,
  DescriptionWraper,
  IconSvgWraper,
  ProductsList,
  ProductWraper,
  TransactionToggle,
} from './ModalAddProduct.styled';
import { useTheme } from 'styled-components';
import { useOrder } from '../../../context/Order/OrderContext';
import { initialOrderProduct } from '../../../context/Order/initialValues';
import Button from '../../Button/Button';

interface ModalAddProductProps {
  onSubmit: (values: OrderProductProps) => void;
}

const ModalAddProduct: React.FC<ModalAddProductProps> = ({ onSubmit }) => {
  const theme = useTheme();
  const { modals } = useOrder();
  const [transaction, setTransaction] = useState<boolean>(false);

  const handleClick = (value: ProductProps) => {
    const unitPrice = value.unitPrice + +transaction * 250;
    const price = unitPrice;

    const product = { ...initialOrderProduct, ...value, ...{ transaction, unitPrice, price } };

    onSubmit(product);
  };

  useEffect(() => {
    setTransaction(false);
  }, [modals.products]);

  return (
    <>
      <TransactionToggle>
        <Button
          type="button"
          text="Wymiana"
          background={!transaction ? theme.color.remarkable : theme.color.remarkableTrans}
          color={!transaction ? theme.color.structural : theme.color.text}
          onClick={() => {
            setTransaction(false);
          }}
        />
        <Button
          type="button"
          text="Zakup"
          background={transaction ? theme.color.remarkable : theme.color.remarkableTrans}
          color={transaction ? theme.color.structural : theme.color.text}
          onClick={() => {
            setTransaction(true);
          }}
        />
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
    </>
  );
};

export default ModalAddProduct;
