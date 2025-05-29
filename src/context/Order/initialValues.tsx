import { AddressProps, ClientProps, CompanyProps, DayProps, OrderProductProps, OrderProps, SummaryProps, WeekProps } from "./orderProps";

// >>>>>> ADDRESS <<<<<<

export const initialAddress: AddressProps = {
  street: '',
  number: '',
  local: '',
  postalCode: '',
  city: '',
}

// >>>>>> CLIENT <<<<<<

const initialDayTime: DayProps = {
  isCheck: false,
  time: [
    {
      hour: 10,
      minute: 0,
    },
    {
      hour: 20,
      minute: 0,
    }
  ]
};

const initialDeliveryTime: WeekProps = {
  monday: initialDayTime,
  tuesday: initialDayTime,
  wednesday: initialDayTime,
  thursday: initialDayTime,
  friday: initialDayTime,
  saturday: initialDayTime,
  sunday: initialDayTime,
};

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

export const initialSummary: SummaryProps = {
  productsCost: 100,
  deliveryCost: 20,
  discount: 0,
  summaryCost: 0,
}

initialSummary.summaryCost = initialSummary.productsCost + initialSummary.deliveryCost;

// >>>>>> Form <<<<<<

export const initialValues: OrderProps = {
  client: initialClient,
  company: initialCompany,
  products: [],
  summary: initialSummary,
};
