import { AddressProps, ClientProps, CompanyProps, DayOfWeek, FieldType } from './orderProps';

// >>>>>> WEEKTIME <<<<<<
export const weekTimeLabels: Record<DayOfWeek, string> = {
  monday: 'Poniedziałek',
  tuesday: 'Wtorek',
  wednesday: 'Środa',
  thursday: 'Czwartek',
  friday: 'Piątek',
  saturday: 'Sobota',
  sunday: 'Niedziela',
};

// >>>>>> ADDRESS <<<<<<
export const addressLabels: Record<keyof AddressProps, string> = {
  street: 'Ulica',
  number: 'Nr',
  local: 'Lokal',
  postalCode: 'Kod pocztowy',
  city: 'Miasto',
};

export const addressTypes: Record<keyof AddressProps, FieldType> = {
  street: 'text',
  number: 'text',
  local: 'text',
  postalCode: 'postalcode',
  city: 'text',
};

// >>>>>> CLIENT <<<<<<

export const clientLabels: Record<keyof ClientProps, string> = {
  name: 'Imię i nazwisko / Nazwa firmy',
  phone: 'Telefon kontaktowy',
  email: 'E-mail',
  address: 'Adres',
  deliveryTime: 'Czas dostawy',
  message: 'Dodatkowe informacje',
  invoice: 'Faktura',
};

export const clientTypes: Record<keyof ClientProps, FieldType> = {
  name: 'text',
  phone: 'phone',
  email: 'text',
  address: 'text',
  deliveryTime: 'weekTime',
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
