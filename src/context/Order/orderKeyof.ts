import { ClientProps, CompanyProps, FieldType } from './orderProps'

// >>>>>> CLIENT <<<<<<

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

// >>>>> COMPANY <<<<<

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