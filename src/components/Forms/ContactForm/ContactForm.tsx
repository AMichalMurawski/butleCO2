import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { ButtonWraper, FormWraper } from './ContactForm.styled';
import { Button } from '../../';
import { theme } from '../../../styles/theme';
import Input from '../InputField/InputField';
import { contactUsSchema, FormValues, initialValues, inputData } from './contactFormData';
import { H3, H4 } from '../../../styles';

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
        
        useEffect(() => { }, [values])

        return (
          <Form>
            <H4>Napisz do nas:</H4>
            <FormWraper>
              {inputData.map((data, index) =>
                <Input key={index} name={data.name} label={data.label} componentType={data.componentType} />
              )}
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
        )
      }}
    </Formik>
  );
};

export default ContactForm;
