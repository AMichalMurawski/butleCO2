import * as Yup from 'yup';

const requiredField = 'Pole wymagane';

export const addressSchema = Yup.object({
    street: Yup.string().min(2, 'Min 2 znaki').required(requiredField),
    number: Yup.string().required(requiredField),
    local: Yup.string().notRequired(),
    postalCode: Yup.string().matches(/^\d{2}-\d{3}$/, 'Kod pocztowy w formacie 00-000').required(requiredField),
    city: Yup.string().min(2, 'Min 2 znaki').required(requiredField),
});


const timeSchema = Yup.object({
    hour: Yup.number().min(0).max(23).required(),
    minute: Yup.number().min(0).max(59).required(),
});
  
const daySchema = Yup.object({
    day: Yup.string().required(),
    enabled: Yup.boolean().required(),
    time: Yup.array().of(timeSchema).length(2).required(),
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
    phone: Yup.string().matches(/^(\d{2}-\d{3}-\d{2}-\d{2}|\d{3}-\d{3}-\d{3})$/, 'Numer telefonu w formacie 00-000-00-00 lub 000-000-000').required(requiredField),
    email: Yup.string().email('Niepoprawny adres email').required(requiredField),
    message: Yup.string().max(150, 'Max 150 znaków').notRequired(),
    invoice: Yup.boolean(),
    deliveryTime: deliveryTimeSchema,
});

export const companySchema = Yup.object({
    name: Yup.string().min(2, 'Min 2 znaki').required(requiredField),
    address: addressSchema,
    NIP: Yup.string().matches(/^\d{10}$/, '10 cyfr').required(requiredField),
});