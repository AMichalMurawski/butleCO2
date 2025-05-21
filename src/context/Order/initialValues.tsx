import { AddressProps, ClientProps, CompanyProps, DayProps, OrderProductProps, OrderProps, SummaryProps } from "./orderProps";

// >>>>>> ADDRESS <<<<<<

export const initialAddress: AddressProps = {
  street: '',
  number: '',
  local: '',
  postalCode: '',
  city: '',
}

// >>>>>> CLIENT <<<<<<

const deliveryTime: DayProps = {
  monday: {
    isCheck: false,
    time: [
      {
        hour: 8,
        minute: 0,
      },
      {
        hour: 8,
        minute: 0,
      },
    ]
  },
  tuesday: {
    isCheck: false,
    time: [
      {
        hour: 8,
        minute: 0,
      },
      {
        hour: 8,
        minute: 0,
      },
    ]
  },
  wednesday: {
    isCheck: false,
    time: [
      {
        hour: 8,
        minute: 0,
      },
      {
        hour: 8,
        minute: 0,
      },
    ]
  },
  thursday: {
    isCheck: false,
    time: [
      {
        hour: 8,
        minute: 0,
      },
      {
        hour: 8,
        minute: 0,
      },
    ]
  },
  friday: {
    isCheck: false,
    time: [
      {
        hour: 8,
        minute: 0,
      },
      {
        hour: 8,
        minute: 0,
      },
    ]
  },
  saturday: {
    isCheck: false,
    time: [
      {
        hour: 8,
        minute: 0,
      },
      {
        hour: 8,
        minute: 0,
      },
    ]
  },
  sunday: {
    isCheck: false,
    time: [
      {
        hour: 8,
        minute: 0,
      },
      {
        hour: 8,
        minute: 0,
      },
    ]
  },
};

export const initialClient: ClientProps = {
  name: '',
  phone: '',
  email: '',
  address: initialAddress,
  deliveryTime: deliveryTime,
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
