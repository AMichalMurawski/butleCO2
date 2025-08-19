import { Config } from '../Config/types';
import {
  AddressProps,
  ClientProps,
  CompanyProps,
  DayProps,
  OrderProductProps,
  OrderProps,
  SummaryProps,
  TimeProps,
} from './orderProps';

// >>>>>> ADDRESS <<<<<<

export const initialAddress: AddressProps = {
  street: '',
  number: '',
  local: '',
  postalCode: '',
  city: '',
};

// >>>>>> CLIENT <<<<<<

const initialTimeStart: TimeProps = {
  hour: 10,
  minute: 0,
};

const initialTimeEnd: TimeProps = {
  hour: 18,
  minute: 0,
};

export const initialDay: DayProps = {
  day: 'monday',
  enabled: false,
  time: [initialTimeStart, initialTimeEnd],
};

export const initialClient: ClientProps = {
  name: '',
  phone: '',
  email: '',
  address: initialAddress,
  deliveryTime: [],
  message: '',
  invoice: false,
};

// >>>>>> Company <<<<<<

export const initialCompany: CompanyProps = {
  name: '',
  address: initialAddress,
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

export const initialSummary = (config: Config): SummaryProps => {
  return {
    productsCost: config.minCost,
    deliveryCost: config.deliveryCost,
    discount: 0,
    summaryCost: config.minCost + config.deliveryCost,
  };
};

// >>>>>> Form <<<<<<

export const initialValues = (config: Config): OrderProps => {
  return {
    client: initialClient,
    company: initialCompany,
    products: [],
    summary: initialSummary({ ...config, minCost: 0, deliveryCost: 0 }),
  };
};
