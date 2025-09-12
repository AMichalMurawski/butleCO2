export type Config = {
  name: string;
  street: string;
  nr: string;
  postalCode: string;
  city: string;
  NIP: string;
  phone: [string, string][];
  email: string;
  openHours: string[];
  facebookURL: string;
  instagramURL: string;
  minCost: number;
  deliveryCost: number;
  createdByUrl: string;
};
