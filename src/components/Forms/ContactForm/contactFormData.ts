import * as Yup from 'yup';
import { FieldType } from '../../../context/Order/orderProps';

const requiredField = 'Pole wymagane';

export const contactUsSchema = Yup.object({
    name: Yup.string().min(2, 'Min 2 znaki').required(requiredField),
    email: Yup.string().email('Niepoprawny adres email').required(requiredField),
    message: Yup.string().max(150, 'Max 150 znaków').required(requiredField),
});

interface InputProps {
  name: string;
  label: string;
  componentType: FieldType;
}

export const inputData: InputProps[] = [
  {
    name: 'name',
    label: 'Imię i nazwisko / Nazwa firmy',
    componentType: 'text'
  },
  {
    name: 'email',
    label: 'Email',
    componentType: 'text'
  },
  {
    name: 'message',
    label: 'Zadaj nam pytanie',
    componentType: 'textarea'
  }
]

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
};