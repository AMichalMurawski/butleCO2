import React from 'react';
import {
  AmountInput,
  CellContent,
  IconAdd,
  IconWraper,
  ProductsListWraper,
  ProductsTable,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableFooter,
  TableFooterCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from './ProductsList.styled';
import IconSvg from '../../Icons/IconSvg';
import { theme } from '../../../styles/theme';
import { useOrder } from '../../../context/Order/OrderContext';
import AmountCounter from './AmountCounter';
import { OrderProductProps } from '../../../context/Order/orderProps';

const tableTitles = ['Poz.', 'Produkt', 'Koszt jedn.', 'Ilość', 'Koszt'];

interface FormProductsProps {
  addProduct: () => void;
}

const FormProducts: React.FC<FormProductsProps> = ({ addProduct }) => {
  const { order, updateSection } = useOrder();  

  const summaryProducts = (products: OrderProductProps[]) => {
    const productsCost = products.reduce((sum, product) => sum = sum + product.price, 0);
    const summary = productsCost + order.summary.deliveryCost;
    updateSection('summary', { ...order.summary, productsCost, summary });
  };

  const handleAmountChange = (newAmount: number, index: number) => {
    const products = [...order.products];
    products[index].amount = newAmount;
    products[index].price = newAmount * products[index].unitPrice;
    updateSection('products', products);
    summaryProducts(products);
  }

  const deleteProduct = (i: number) => {
    const products = order.products;
    products.splice(i, 1);
    updateSection('products', products);
  };

  return (
    <ProductsListWraper>
      <ProductsTable>
        <TableHead>
          <TableRow>
            {tableTitles.map((title, i) => (
              <TableHeaderCell key={i}>
                <CellContent>{title}</CellContent>
              </TableHeaderCell>
            ))}
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.products.map((product, i) => (
            <TableBodyRow key={i}>
              <TableBodyCell>{i + 1}</TableBodyCell>
              <TableBodyCell $transaction={product.transaction}>
                {product.type} - {product.weight ? product.weight + ' kg' : ''}
                {product.litr ? product.litr + ' l' : ''}
              </TableBodyCell>
              <TableBodyCell>
                {product.unitPrice.toFixed(2)} PLN
              </TableBodyCell>
              <TableBodyCell>
                <AmountCounter min={1} max={60} value={product.amount} onChange={value => handleAmountChange(value, i)} />
              </TableBodyCell>
              <TableBodyCell>
                {product.price} PLN
              </TableBodyCell>
              <TableBodyCell onClick={() => deleteProduct(i)}>
                <IconWraper>
                  <IconSvg name="cross" fill="red" />
                </IconWraper>
              </TableBodyCell>
            </TableBodyRow>
          ))}
          <TableBodyRow style={{ cursor: 'pointer' }} onClick={addProduct}>
            <TableBodyCell>
              <IconAdd>
                <IconSvg name="cross" fill={theme.color.accent} />
              </IconAdd>
            </TableBodyCell>
            <TableBodyCell colSpan={5}>...</TableBodyCell>
          </TableBodyRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableFooterCell colSpan={3} />
            <TableFooterCell $sum>Suma:</TableFooterCell>
            <TableFooterCell $sum colSpan={2}>
              {order.summary.summary} PLN *
            </TableFooterCell>
          </TableRow>
        </TableFooter>
      </ProductsTable>
    </ProductsListWraper>
  );
};

export default FormProducts;
