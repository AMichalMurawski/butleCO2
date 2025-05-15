import { ClientProps, CompanyProps, OrderProductProps, OrderProps, SummaryProps } from "./orderProps";

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
  transaction: false,
  amount: 1,
  price: 0,
};

// >>>>>> Order <<<<<<

export const initialSummary: SummaryProps = {
  productsCost: 0,
  deliveryCost: 20,
  discount: 0,
  summaryCost: 0,
}

// >>>>>> Form <<<<<<

export const initialValues: OrderProps = {
  client: initialClient,
  company: initialCompany,
  products: [],
  summary: initialSummary,
};
