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
import IconSvg from '../../Icon/IconSvg';
import { theme } from '../../../styles/theme';

const products = [
  { name: 'Butla CO2 - 25l', quantity: 2, unitPrice: 100 },
  { name: 'Butla CO2 - 10l', quantity: 1, unitPrice: 50 },
  { name: 'Butla Argon - 8l', quantity: 5, unitPrice: 80 },
];

const tableTitles = ['Poz.', 'Produkt', 'Koszt jedn.', 'Ilość', 'Koszt'];

const FormProducts: React.FC = () => {
  const totalCost = products.reduce(
    (sum, product) => sum + product.quantity * product.unitPrice,
    0
  );

  const addProduct = () => {
    window.alert('Dodaj produkt');
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
          {products.map((product, i) => (
            <TableBodyRow key={i}>
              <TableBodyCell>{i + 1}</TableBodyCell>
              <TableBodyCell>{product.name}</TableBodyCell>
              <TableBodyCell>{product.unitPrice.toFixed(2)} PLN</TableBodyCell>
              <TableBodyCell>{product.quantity}</TableBodyCell>
              <TableBodyCell>{(product.quantity * product.unitPrice).toFixed(2)} PLN</TableBodyCell>
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
              {totalCost.toFixed(2)} PLN *
            </TableFooterCell>
          </TableRow>
        </TableFooter>
      </ProductsTable>
    </ProductsListWraper>
  );
};

export default FormProducts;
