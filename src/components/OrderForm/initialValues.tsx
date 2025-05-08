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

export const clientLabels: Record<keyof ClientProps, string> = {
  name: 'Imię i nazwisko / Nazwa firmy',
  street: 'Ulica',
  number: 'Nr',
  local: 'Lokal',
  postalCode: 'Kod pocztowy',
  city: 'Miasto',
  phone: 'Telefon kontaktowy',
  email: 'E-mail',
  message: 'Dodatkowe informacje',
  invoice: 'Faktura',
};

type FieldType = 'text' | 'textarea' | 'checkbox';

export const clientTypes: Record<keyof ClientProps, FieldType> = {
  name: 'text',
  street: 'text',
  number: 'text',
  local: 'text',
  postalCode: 'text',
  city: 'text',
  phone: 'text',
  email: 'text',
  message: 'textarea',
  invoice: 'checkbox',
};

// >>>>>> Company <<<<<<

interface CompanyProps {
  name: string;
  street: string;
  number: string;
  local: number | '';
  postalCode: number | '';
  city: string;
  NIP: number | '';
}

export const initialCompany: CompanyProps = {
  name: '',
  street: '',
  number: '',
  local: '',
  postalCode: '',
  city: '',
  NIP: '',
};

export const companyLabels: Record<keyof CompanyProps, string> = {
  name: 'Nazwa firmy',
  street: 'Ulica',
  number: 'Nr',
  local: 'Lokal',
  postalCode: 'Kod pocztowy',
  city: 'Miasto',
  NIP: 'NIP',
};

export const companyTypes: Record<keyof CompanyProps, FieldType> = {
  name: 'text',
  street: 'text',
  number: 'text',
  local: 'text',
  postalCode: 'text',
  city: 'text',
  NIP: 'text',
};

// >>>>>> PRODUCTS <<<<<<

export interface BaseProductProps {
  type: 'CO2' | 'Propan' | 'Azot' | 'Azot + CO2' | 'Argon' | 'Argon + CO2' | '';
  unitPrice: number;
}


type RequireAtLeastOneProductProps<T, Keys extends keyof T = keyof T> = 
  Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Omit<Pick<T, Keys>, K>>
  }[Keys];

export type ProductProps = RequireAtLeastOneProductProps<{
  weight?: number;
  litr?: number;
} & BaseProductProps, 'weight' | 'litr'>;


export type OrderProductProps = ProductProps & {
  isPurchased: boolean;
  amount: number;
  cost: number;
}

export const initialOrderProduct: OrderProductProps = {
  type: "",
  unitPrice: 0,
  weight: 0,
  litr: 0,
  isPurchased: false,
  amount: 1,
  cost: 0,
}

// >>>>>> Form <<<<<<

interface FormValues {
  client: ClientProps;
  company: CompanyProps;
  products: ProductProps[];
}

export const initialValues: FormValues = {
  client: initialClient,
  company: initialCompany,
  products: [],
};
