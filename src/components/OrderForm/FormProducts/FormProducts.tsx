import React from 'react';
import {
  CellContent,
  InvoiceProducts,
  ProductsTable,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableFooter,
  TableFooterCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from './FormProducts.styled';

const products = [
  { position: 1, name: 'Butla CO2 - 25l', quantity: 2, unitPrice: 100 },
  { position: 2, name: 'Butla CO2 - 10l', quantity: 1, unitPrice: 50 },
  { position: 3, name: 'Butla Argon - 8l', quantity: 5, unitPrice: 80 },
];

const FormProducts: React.FC = () => {
  const totalCost = products.reduce(
    (sum, product) => sum + product.quantity * product.unitPrice,
    0
  );

  return (
    <InvoiceProducts>
      <ProductsTable>
        <TableHead>
          <TableRow>
            <TableHeaderCell>
              <CellContent>Poz.</CellContent>
            </TableHeaderCell>
            <TableHeaderCell>
              <CellContent>Produkt</CellContent>
            </TableHeaderCell>
            <TableHeaderCell>
              <CellContent>Koszt jedn.</CellContent>
            </TableHeaderCell>
            <TableHeaderCell>
              <CellContent>Ilość</CellContent>
            </TableHeaderCell>
            <TableHeaderCell>
              <CellContent>Koszt</CellContent>
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <TableBodyRow key={product.position}>
              <TableBodyCell>{product.position}</TableBodyCell>
              <TableBodyCell>{product.name}</TableBodyCell>
              <TableBodyCell>{product.unitPrice.toFixed(2)} PLN</TableBodyCell>
              <TableBodyCell>{product.quantity}</TableBodyCell>
              <TableBodyCell>{(product.quantity * product.unitPrice).toFixed(2)} PLN</TableBodyCell>
            </TableBodyRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableFooterCell colSpan={3} />
            <TableFooterCell $sum>Suma:</TableFooterCell>
            <TableFooterCell $sum>{totalCost.toFixed(2)} PLN *</TableFooterCell>
          </TableRow>
        </TableFooter>
      </ProductsTable>
    </InvoiceProducts>
  );
};

export default FormProducts;
