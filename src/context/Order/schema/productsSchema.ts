import * as Yup from 'yup';
import { gasTypes } from '../orderProps';
import { requiredField } from './utils';

export const productSchema = Yup.object({
    type: Yup.string()
      .oneOf([...gasTypes])
      .required(requiredField),
    unitPrice: Yup.number().min(0).required(requiredField),
    weight: Yup.number().min(0).notRequired(),
    litr: Yup.number().min(0).notRequired(),
    transaction: Yup.boolean().required(requiredField),
    amount: Yup.number().min(1, 'Min 1 sztuka').required(requiredField),
    price: Yup.number().min(0).required(requiredField),
  }).test(
    'weight-or-litr-required',
    'Wymagana waga lub litry',
    value => {
      if (!value) return false;
      const hasWeight = typeof value.weight === 'number' && value.weight > 0;
      const hasLitr = typeof value.litr === 'number' && value.litr > 0;
      return hasWeight || hasLitr;
    }
);

export const validateProductSchema = Yup.array()
  .of(productSchema)
  .min(1, 'Dodaj przynajmniej jeden produkt')
  .required(requiredField);