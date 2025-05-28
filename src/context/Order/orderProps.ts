
export type FieldType = 'text' | 'textarea' | 'checkbox' | 'weekTime';

export interface AddressProps {
  street: string;
  number: string;
  local: string;
  postalCode: number | '';
  city: string;
}

// >>>>>> CLIENT <<<<<<

export type TimeProps = {
  hour: number;
  minute: number;
}

export interface DayProps {
  isCheck: boolean;
  time: [TimeProps, TimeProps];
}

export type WeekProps = {
  monday: DayProps;
  tuesday: DayProps;
  wednesday: DayProps;
  thursday: DayProps;
  friday: DayProps;
  saturday: DayProps;
  sunday: DayProps;
}

export interface ClientProps {
  name: string;
  phone: number | '';
  email: string;
  address: AddressProps;
  deliveryTime: WeekProps;
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