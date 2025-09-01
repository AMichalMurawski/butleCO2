import * as Yup from 'yup';
import { addressSchema, hasAddress } from './';
import { requiredField } from './utils';

const daySchema = Yup.object({
  day: Yup.string().required(),
  enabled: Yup.boolean().required(),
  time: Yup.array()
    .of(
      Yup.string()
        .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, 'Niepoprawny format godziny HH:MM')
        .required()
    )
    .length(2, 'Muszą być dwie godziny: start i koniec')
    .required(),
});

const deliveryTimeSchema = Yup.array()
  .of(daySchema)
  .required(requiredField)
  .min(1, 'Musisz dodać przynajmniej jeden dzień')
  .test(
    'at-least-one-enabled',
    'Przynajmniej jeden dzień musi być zaznaczony',
    value => Array.isArray(value) && value.some(day => day.enabled)
  );

export const clientSchema = Yup.object({
  name: Yup.string().min(2, 'Min 2 znaki').required(requiredField),
  address: addressSchema,
  phone: Yup.string()
    .matches(
      /^(\d{2}-\d{3}-\d{2}-\d{2}|\d{3}-\d{3}-\d{3})$/,
      'Numer telefonu w formacie 00-000-00-00 lub 000-000-000'
    )
    .required(requiredField),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Niepoprawny adres email')
    .required(requiredField),
  message: Yup.string().max(150, 'Max 150 znaków').notRequired(),
  invoice: Yup.boolean(),
  deliveryTime: deliveryTimeSchema,
});

export const validateClientSchema = Yup.object().test(
  'client-valid',
  'Uzupełnij dane klienta',
  function (value: any) {
    if (!value) return false;

    const { name, address, phone, email, message, invoice, deliveryTime } = value;

    const hasName = typeof name === 'string' && name.length >= 2;
    const hasPhone =
      typeof phone === 'string' && /^(\d{2}-\d{3}-\d{2}-\d{2}|\d{3}-\d{3}-\d{3})$/.test(phone);
    const hasEmail = typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const hasValidDeliveryTime =
      Array.isArray(deliveryTime) &&
      deliveryTime.some(d => d.enabled) &&
      deliveryTime.every(
        d =>
          Array.isArray(d.time) &&
          d.time.length === 2 &&
          d.time.every(
            (t: string) => typeof t === 'string' && /^([0-1]\d|2[0-3]):([0-5]\d)$/.test(t)
          )
      );
    const isValidMessage =
      typeof message === 'undefined' || (typeof message === 'string' && message.length <= 150);
    const isValidInvoice = typeof invoice === 'undefined' || typeof invoice === 'boolean';
    const validAddress = hasAddress(address);

    return (
      hasName &&
      hasPhone &&
      hasEmail &&
      validAddress &&
      hasValidDeliveryTime &&
      isValidMessage &&
      isValidInvoice
    );
  }
);
