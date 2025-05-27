import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { ButtonWraper, FormWraper } from './ContactForm.styled';
import { Button } from '../../';
import { theme } from '../../../styles/theme';
import Input from '../Input/Input';
import * as Yup from 'yup';

const requiredField = 'Pole wymagane';

export const contactUsSchema = Yup.object({
    name: Yup.string().min(2, 'Min 2 znaki').required(requiredField),
    email: Yup.string().email('Niepoprawny adres email').required(requiredField),
    message: Yup.string().max(150, 'Max 150 znaków').required(requiredField),
});

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
};

const ContactForm: React.FC = () => {
  const handleSubmit = (values: FormValues) => {
    window.alert(JSON.stringify(values, null, " "));
  };
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactUsSchema}
      onSubmit={(values, { resetForm, validateForm }) => {
        handleSubmit(values);
        resetForm();
        validateForm(initialValues);
      }}
      validateOnMount={true}
      validateOnBlur={true}
      validateOnChange={true}>
      {({ isValid, values }) => {
        
        useEffect(() => {}, [values])

        return (
        <Form>
          <FormWraper>
            <Input name='name' label='Imię i nazwisko / Nazwa firmy' componentType={'text'} />
            <Input name='email' label='E-mail' componentType={'text'} />
            <Input name='message' label='Zadaj nam pytanie' componentType={'textarea'} />
            <ButtonWraper $disabled={!isValid}>
              <Button
                type="submit"
                text="Wyślij zapytanie"
                background={!isValid ? theme.color.structural : theme.color.remarkable}
                color={!isValid ? theme.color.remarkable : theme.color.structural}
              />
            </ButtonWraper>
          </FormWraper>
        </Form>
      )}}
    </Formik>
  );
};

export default ContactForm;
