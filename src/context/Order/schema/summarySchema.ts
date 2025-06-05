import * as Yup from 'yup';
import { requiredField } from './utils';

export const summarySchema = Yup.object({
    productsCost: Yup.number().min(100).required(requiredField),
    deliveryCost: Yup.number().min(20).required(requiredField),
    discount: Yup.number().min(0).max(100).required(requiredField),
    summaryCost: Yup.number().min(120).required(requiredField),
});