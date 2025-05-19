import React from 'react';
import {
  CheckboxHandleValue,
  CheckboxValue,
  CheckboxValueWraper,
  ClientInfoWraper,
  DataList,
  DataName,
  DataWraper,
  SubmitButtonConteiner,
  Subtitle,
  SubtitleWraper,
  TextareaValue,
  TextValue,
} from './ClientForm.styled';
import Button from '../../Button/Button';
import { theme } from '../../../styles/theme';
import { Field, Formik, Form } from 'formik';
import { initialAddress } from '../../../context/Order/initialValues';
import { addressLabels, addressTypes } from '../../../context/Order/orderKeyof';
import { AddressProps } from '../../../context/Order/orderProps';

const typeComponentMap = {
  text: TextValue,
  textarea: TextareaValue,
  checkbox: CheckboxValue,
} as const;

interface ModalClientProps<T> {
  title: string;
  labels: Record<keyof T, string>;
  types: Record<keyof T, keyof typeof typeComponentMap>;
  initialValues: T;
  onSubmit: (values: T) => void;
}

const ClientForm = <T extends Record<string, any>>({
  title,
  labels,
  types,
  initialValues,
  onSubmit,
}: ModalClientProps<T>) => {
    
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values }) => {

        return (
          <Form>
            <ClientInfoWraper>
              <SubtitleWraper>
                <Subtitle>{title}</Subtitle>
              </SubtitleWraper>
              <DataList>
                {Object.keys(initialValues).map((key) => {
                  const name = key as keyof T;
                  const label = labels[name];
                  const type = types[name];
                  const Component = typeComponentMap[type] || TextValue;
                  
                  if (key === "address") {
                    return Object.keys(initialAddress).map((key2) => {
                      const name2 = key2 as keyof AddressProps;
                      const label2 = addressLabels[name2];
                      const type2 = addressTypes[name2];
                      const Component2 = typeComponentMap[type2] || TextValue;

                      return (
                        <DataWraper key={`address.${String(name2)}`}>
                          <DataName>{label2}:</DataName>
                          {Component2 === TextValue && (
                            <Field as={Component2} name={ `address.${String(name2)}` } type='text' />
                          )}
                          {Component2 === TextareaValue && (
                            <Field as={Component2} name={String(name2)} maxLength='250' rows='5' />
                          )}
                          {Component2 === CheckboxValue && (
                            <CheckboxValueWraper>
                              <Field as={CheckboxValue} name={String(name2)} type="checkbox" />
                              <CheckboxHandleValue checked={Boolean(values[name2])} />
                            </CheckboxValueWraper>
                          )}
                        </DataWraper>
                      );
                    });
                  };

                  return (
                    <DataWraper key={String(name)}>
                      <DataName>{label}:</DataName>
                      {Component === TextValue && (
                        <Field as={Component} name={String(name)} type='text' />
                      )}
                      {Component === TextareaValue && (
                        <Field as={Component} name={String(name)} maxLength='250' rows='5' />
                      )}
                      {Component === CheckboxValue && (
                        <CheckboxValueWraper>
                          <Field as={CheckboxValue} name={String(name)} type="checkbox" />
                          <CheckboxHandleValue checked={Boolean(values[name])} />
                        </CheckboxValueWraper>
                      )}
                    </DataWraper>
                  );
                })}
                <SubmitButtonConteiner>
                  <Button
                    type="submit"
                    text="Zatwierdź"
                    color={theme.color.structural}
                    background={theme.color.remarkable}
                  />
                </SubmitButtonConteiner>
              </DataList>
            </ClientInfoWraper>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ClientForm;
