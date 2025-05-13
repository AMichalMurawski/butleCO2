import { Field, Form, Formik } from 'formik';
import React from 'react';
import { ProductProps } from '../../../context/Order/orderProps';
import { productsList } from './productsList';
import IconSvg from '../../Icons/IconSvg';

interface ModalAddProductProps {
  onSubmit: (values: ProductProps[]) => void;
}

const ModalAddProduct: React.FC<ModalAddProductProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={[]}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values }) => {
        return (
          <Form>
            <h3>Wybierz produkty:</h3>
            {productsList.map(product => {
              const type = `${product.type} ${product.weight ? product.weight + 'kg' : ''}${product.litr ? product.litr + 'l' : ''}`;
              const label = `${type} - ${product.unitPrice.toFixed(2)} PLN`;

              return (
                <div key={type}>
                  <div
                    style={{
                      position: 'relative',
                      boxSizing: 'border-box',
                      width: '280px',
                      height: '180px',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      background: 'lightgrey',
                    }}
                  >
                    <p
                      style={{
                        position: 'absolute',
                        left: '75px',
                        top: '80px',
                        color: 'white',
                        zIndex: 1,
                      }}
                    >
                      {product.weight ? product.weight + 'kg' : ''}
                      {product.litr ? product.litr + 'l' : ''}
                    </p>
                    <div style={{ transform: 'translate(10px, 10px)' }}>
                      <IconSvg name="gas-cylinder" size="180px" fill="#000" />
                    </div>
                    <p>{product.type}</p>
                    <p>{product.unitPrice}</p>
                    <label>
                      <Field
                        style={{ visibility: 'hidden' }}
                        type="checkbox"
                        name="productsList"
                        value={JSON.stringify(product)}
                      />
                    </label>
                  </div>
                </div>
              );
            })}
            <button type="submit">Dodaj produkt</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ModalAddProduct;
