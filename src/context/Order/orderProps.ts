
export type FieldType = 'text' | 'textarea' | 'checkbox' | 'time';

export interface AddressProps {
  street: string;
  number: string;
  local: string;
  postalCode: number | '';
  city: string;
}

// >>>>>> CLIENT <<<<<<

type TimeProps = {
  hour: number;
  minute: number;
}

export type DayProps = {
  monday: {
    isCheck: boolean;
    time: [TimeProps, TimeProps];
  };
  tuesday: {
    isCheck: boolean;
    time: [TimeProps, TimeProps];
  };
  wednesday: {
    isCheck: boolean;
    time: [TimeProps, TimeProps];
  };
  thursday: {
    isCheck: boolean;
    time: [TimeProps, TimeProps];
  };
  friday: {
    isCheck: boolean;
    time: [TimeProps, TimeProps];
  };
  saturday: {
    isCheck: boolean;
    time: [TimeProps, TimeProps];
  };
  sunday: {
    isCheck: boolean;
    time: [TimeProps, TimeProps];
  }
}

export interface ClientProps {
  name: string;
  phone: number | '';
  email: string;
  address: AddressProps;
  deliveryTime: DayProps;
  message: string;
  invoice: boolean;
}

// >>>>> COMPANY <<<<<<

export interface CompanyProps {
  name: string;
  address: AddressProps;
  NIP: number | '';
}

// >>>>>> PRODUCT <<<<<<

export interface BaseProductProps {
  type: 'CO2' | 'Propan' | 'Azot' | 'Azot + CO2' | 'Argon' | 'Argon + CO2' | '';
  unitPrice: number;
}

type RequireAtLeastOneProductProps<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Omit<Pick<T, Keys>, K>>;
  }[Keys];

export type ProductProps = RequireAtLeastOneProductProps<
  {
    weight?: number;
    litr?: number;
  } & BaseProductProps,
  'weight' | 'litr'
>;

export type OrderProductProps = ProductProps & {
  transaction: boolean;
  amount: number;
  price: number;
};

// >>>>>> ORDER <<<<<<

export interface SummaryProps {
  productsCost: number;
  deliveryCost: number;
  discount: number;
  summaryCost: number;
}

export interface OrderProps {
  client: ClientProps;
  company: CompanyProps;
  products: OrderProductProps[];
  summary: SummaryProps;
}