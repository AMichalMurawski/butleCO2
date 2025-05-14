import React from 'react';
import {
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
import { OrderProductProps } from '../../../context/Order/orderProps';

const tableTitles = ['Poz.', 'Produkt', 'Koszt jedn.', 'Ilość', 'Koszt'];

interface FormProductsProps {
  addProduct: () => void;
}

const FormProducts: React.FC<FormProductsProps> = ({ addProduct }) => {
  const { order } = useOrder();

  const totalCost = (): string => {
    let sum: number = order.products.reduce(
      (sum: any, product: any) => sum + product.amount * (product.unitPrice + (product.transaction ? 250 : 0)),
      0
    )
    if (sum < 100) { sum = 100 }
    sum = sum + 20
    return sum.toFixed(2)
  };

  const deleteProduct = () => {
    window.alert('Usuń produkt');
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
              <TableBodyCell $transaction={product.transaction}>{product.type} - {product.weight ? (product.weight + ' kg') : ""}{product.litr ? (product.litr + " l") : ""}</TableBodyCell>
              <TableBodyCell>{(product.unitPrice + (product.transaction ? 250 : 0)).toFixed(2)} PLN</TableBodyCell>
              <TableBodyCell>{product.amount}</TableBodyCell>
              <TableBodyCell>{(product.amount * (product.unitPrice + (product.transaction ? 250 : 0))).toFixed(2)} PLN</TableBodyCell>
              <TableBodyCell onClick={deleteProduct}>
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
              {totalCost()} PLN *
            </TableFooterCell>
          </TableRow>
        </TableFooter>
      </ProductsTable>
    </ProductsListWraper>
  );
};

export default FormProducts;
