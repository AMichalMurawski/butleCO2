import * as Yup from 'yup';
import { requiredField } from './utils';
import { addressSchema, hasAddress } from './';

export const companySchema = Yup.object({
  name: Yup.string().min(2, 'Min 2 znaki').required(requiredField),
  address: addressSchema,
  NIP: Yup.string().matches(/^\d{10}$/, '10 cyfr')
    .transform(value => (value ? value.replace(/\D/g, '') : ''))
    .matches(/^\d{10}$/, 'NIP musi mieć dokładnie 10 cyfr')
    .required(requiredField),
});

export const companySchemaOptional = Yup.object({
  name: Yup.string().notRequired(),
  address: Yup.object({
    street: Yup.string().notRequired(),
    number: Yup.string().notRequired(),
    local: Yup.string().notRequired(),
    postalCode: Yup.string().notRequired(),
    city: Yup.string().notRequired(),
  }),
  NIP: Yup.string().notRequired(),
});

export const validateCompanySchema = Yup.mixed().test(
  'company-valid',
  'Uzupełnij dane firmy',
  function (companyValue: any) {
    if (!companyValue) return false;
    const { client } = this.parent as { client: any };

    const shouldValidateCompany = client?.invoice === true;

    // jeśli firma ma być walidowana (invoice = true)
    if (shouldValidateCompany) {
      if (!companyValue) return false;

      const { name, address, NIP } = companyValue;

      const hasName = typeof name === 'string' && name.length >= 2;
      const hasValidAddress = address && hasAddress(address); // użyj tej samej funkcji co dla client.address
      const hasValidNIP =
        typeof NIP === 'string' &&
        /^\d{10}$/.test(NIP.replace(/\D/g, ''));

      return hasName && hasValidAddress && hasValidNIP;
    } else {
      return true;
    }
  }
);