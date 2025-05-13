import { ClientProps, CompanyProps, FieldType, OrderProductProps, OrderProps, ProductProps } from "./orderProps";

// >>>>>> CLIENT <<<<<<

export const initialClient: ClientProps = {
  name: '',
  street: '',
  number: '',
  local: '',
  postalCode: '',
  city: '',
  phone: '',
  email: '',
  message: '',
  invoice: false,
};

// >>>>>> Company <<<<<<

export const initialCompany: CompanyProps = {
  name: '',
  street: '',
  number: '',
  local: '',
  postalCode: '',
  city: '',
  NIP: '',
};

// >>>>>> PRODUCTS <<<<<<

export const initialOrderProduct: OrderProductProps = {
  type: '',
  unitPrice: 0,
  weight: 0,
  litr: 0,
  isPurchased: false,
  amount: 1,
  cost: 0,
};

// >>>>>> Form <<<<<<

export const initialValues: OrderProps = {
  client: initialClient,
  company: initialCompany,
  products: [],
};
