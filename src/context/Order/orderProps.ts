
export type FieldType = 'text' | 'textarea' | 'checkbox';

// >>>>>> CLIENT <<<<<<

export interface ClientProps {
  name: string;
  street: string;
  number: string;
  local: number | '';
  postalCode: number | '';
  city: string;
  phone: number | '';
  email: string;
  message: string;
  invoice: boolean;
}

// >>>>> COMPANY <<<<<<

export interface CompanyProps {
  name: string;
  street: string;
  number: string;
  local: number | '';
  postalCode: number | '';
  city: string;
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
  isPurchased: boolean;
  amount: number;
  cost: number;
};

// >>>>>> ORDER <<<<<<

export interface OrderProps {
  client: ClientProps;
  company: CompanyProps;
  products: ProductProps[];
}