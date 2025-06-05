import * as Yup from 'yup';
import { requiredField } from './utils';

export const addressSchema = Yup.object({
    street: Yup.string().min(2, 'Min 2 znaki').required(requiredField),
    number: Yup.string().required(requiredField),
    local: Yup.string().notRequired(),
    postalCode: Yup.string().matches(/^\d{2}-\d{3}$/, 'Kod pocztowy w formacie 00-000').required(requiredField),
    city: Yup.string().min(2, 'Min 2 znaki').required(requiredField),
});

export const hasAddress = (address: any): boolean => {
    if (!address) return false;
  
    const { street, number, local, postalCode, city } = address;
  
    return (
      typeof street === 'string' && street.length >= 2 &&
      typeof number === 'string' && number.length > 0 &&
      (typeof local === 'undefined' || typeof local === 'string') &&
      typeof postalCode === 'string' && /^\d{2}-\d{3}$/.test(postalCode) &&
      typeof city === 'string' && city.length >= 2
    );
  };