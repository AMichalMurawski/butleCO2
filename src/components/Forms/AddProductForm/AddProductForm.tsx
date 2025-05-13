import { Field, Form, Formik } from "formik";
import React from "react";
import {  ProductProps } from "../../../context/Order/orderProps";
import { productsList } from "./productsList";

interface ModalAddProductProps {
    onSubmit: (values: ProductProps[]) => void,
}

const ModalAddProduct: React.FC<ModalAddProductProps> = ({ onSubmit }) => {

    return (
        <Formik initialValues={[]}
            onSubmit={(values) => {
                onSubmit(values);
            }}>
            {({ values }) => {

                return (
                    <Form>
                        <h3>Wybierz produkty:</h3>
                        {productsList.map(product => {
                            const type = `${product.type} ${product.weight ? (product.weight + "kg") : ""}${product.litr ? (product.litr + "l") : ""}`
                            const label = `${type} - ${product.unitPrice.toFixed(2)} PLN`;

                            return (
                                <div key={type}>
                                    <label>
                                        <Field type='checkbox' name='productsList' value={JSON.stringify(product)} />
                                        {label}
                                    </label>
                                </div>
                            );
                        })}
                        <button type='submit'>Dodaj produkt</button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default ModalAddProduct;