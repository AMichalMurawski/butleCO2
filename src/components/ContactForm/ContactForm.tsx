import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { FormWraper, GridCell, InputStyled, Placeholder } from './ContactForm.styled';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { theme } from '../../styles/theme';

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
  const handleSubmit = () => {};
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <FormWraper>
          <GridCell gridColumn="1" gridRow="1">
            <Placeholder>Imię:</Placeholder>
          </GridCell>
          <GridCell gridColumn="2" gridRow="1" width="50%">
            <Input name="name" type="text" />
          </GridCell>
          <GridCell gridColumn="1" gridRow="2">
            <Placeholder>E-mail:</Placeholder>
          </GridCell>
          <GridCell gridColumn="2" gridRow="2" width="50%">
            <Input name="email" type="email" />
          </GridCell>
          <GridCell gridColumn="1 / 3" gridRow="3">
            <Placeholder>Twoja wiadomość:</Placeholder>
          </GridCell>
          <GridCell gridColumn="1 / 3" gridRow="4" width="100%" height="200px">
            <Input name="message" asType="textarea" />
          </GridCell>
          <GridCell gridColumn='1 / 3' gridRow='5' atr={['margin-left: auto','margin-right: auto']}>
            <Button text="Wyślij zapytanie" background={theme.color.hightlight} />
          </GridCell>
        </FormWraper>
      </Form>
    </Formik>
  );
};

export default ContactForm;
