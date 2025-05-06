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

interface ProductsProps {
  bottleType: string;
  bottleSize: string;
  amount: number;
  unitPrice: number;
  cost: number;
}

export const initialProducts: ProductsProps = {
  bottleType: '',
  bottleSize: '',
  amount: 0,
  unitPrice: 0,
  cost: 0,
};

interface FormValues {
  client: ClientProps;
  company: CompanyProps;
  products: ProductsProps[];
}

export const initialValues: FormValues = {
  client: initialClient,
  company: initialCompany,
  products: [],
};
