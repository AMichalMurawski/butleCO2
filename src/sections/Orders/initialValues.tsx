interface ClientProps {
  name: string;
  deliveryAddress: string;
  phone: number | null;
  email: string;
  message: string;
  invoice: boolean;
}

const initialClient: ClientProps = {
  name: '',
  deliveryAddress: '',
  phone: null,
  email: '',
  message: '',
  invoice: false,
};

interface CompanyProps {
  name: string;
  streetName: string;
  streetNr: string;
  aptNr: number | null;
  postalCode: number | null;
  city: string;
  NIP: number | null;
}

const initialCompany: CompanyProps = {
  name: '',
  streetName: '',
  streetNr: '',
  aptNr: null,
  postalCode: null,
  city: '',
  NIP: null,
};

interface OrderProps {
  bottleType: string;
  bottleSize: string;
  amount: number;
  unitPrice: number;
  cost: number;
}

const initialOrder: OrderProps = {
  bottleType: '',
  bottleSize: '',
  amount: 0,
  unitPrice: 0,
  cost: 0,
};

interface FormValues {
  client: ClientProps;
  company: CompanyProps;
}

export const initialValues: FormValues = {
  client: initialClient,
  company: initialCompany,
};
