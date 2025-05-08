import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { BaseProductProps,  ProductProps } from "../initialValues";
import { productsList } from "./productsList";

interface ModalAddProductProps {
    onSubmit: (values: ProductProps[]) => void,
}

const ModalAddProduct: React.FC<ModalAddProductProps> = ({ onSubmit }) => {

    return <Formik initialValues={[]}
        onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
        }}
    >
        {({ values }) => {

            const handleSubmit = () => {
                onSubmit(values)
            }

            return (
                <Form>
                    <h3>Wybierz produkty:</h3>
                    {productsList.map(product => {
                        const type = `${product.type} ${product.weight && `${product.weight}kg`}${product.litr && `${product.litr}l`}`
                        const label = `${type} - ${product.unitPrice.toFixed(2)} PLN`;

                        return (
                            <div key={type}>
                                <label>
                                    <Field type='checkbox' name='selectedProducts' value={type} />
                                    {label}
                                </label>
                            </div>
                        )
                    })}
                    <button type='button' onClick={handleSubmit}>Doda produkty</button>
                </Form>
            )
        }}
      </Formik>
}

export default ModalAddProduct