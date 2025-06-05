import * as Yup from 'yup';
import { validateClientSchema } from './clientSchema';
import { validateCompanySchema } from './companySchema';
import { validateProductSchema } from './productsSchema';
import { summarySchema } from './summarySchema';

export const orderSchema = Yup.object({
  client: validateClientSchema,
  company: validateCompanySchema,
  products: validateProductSchema,
  summary: summarySchema,
});