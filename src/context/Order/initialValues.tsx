import { Config } from '../Config/types';
import {
  AddressProps,
  ClientProps,
  CompanyProps,
  DayOfWeek,
  DayProps,
  OrderProductProps,
  OrderProps,
  SummaryProps,
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

const daysOfWeek: DayOfWeek[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

export const initialDay: DayProps = {
  day: 'monday',
  enabled: false,
  time: ['09:00', '17:00'],
};

export const initialDeliveryTime: DayProps[] = daysOfWeek.map(day => ({
  day,
  enabled: false,
  time: ['09:00', '17:00'],
}));

export const initialClient: ClientProps = {
  name: '',
  phone: '',
  email: '',
  address: initialAddress,
  deliveryTime: initialDeliveryTime,
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
