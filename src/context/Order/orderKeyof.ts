import { AddressProps, ClientProps, CompanyProps, FieldType } from './orderProps'

// >>>>>> ADDRESS <<<<<<
export const addressLabels: Record<keyof AddressProps, string> = {
  street: 'Ulica',
  number: 'Nr',
  local: 'Lokal',
  postalCode: 'Kod pocztowy',
  city: 'Miasto',
}

export const addressTypes: Record<keyof AddressProps, FieldType> = {
  street: 'text',
  number: 'text',
  local: 'text',
  postalCode: 'text',
  city: 'text',
}

// >>>>>> CLIENT <<<<<<

export const clientLabels: Record<keyof ClientProps, string> = {
  name: 'Imię i nazwisko / Nazwa firmy',
  address: 'Adres',
  phone: 'Telefon kontaktowy',
  email: 'E-mail',
  message: 'Dodatkowe informacje',
  invoice: 'Faktura',
};

export const clientTypes: Record<keyof ClientProps, FieldType> = {
  name: 'text',
  address: 'text',
  phone: 'text',
  email: 'text',
  message: 'textarea',
  invoice: 'checkbox',
};

// >>>>> COMPANY <<<<<

export const companyLabels: Record<keyof CompanyProps, string> = {
  name: 'Nazwa firmy',
  address: 'Adres',
  NIP: 'NIP',
};

export const companyTypes: Record<keyof CompanyProps, FieldType> = {
  name: 'text',
  address: 'text',
  NIP: 'text',
};