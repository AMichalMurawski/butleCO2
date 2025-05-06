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
} from './ModalClient.styled';
import Button from '../../Button/Button';
import { theme } from '../../../styles/theme';
import { Field, Formik, Form } from 'formik';

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

const ModalClient = <T extends Record<string, any>>({
  title,
  labels,
  types,
  initialValues,
  onSubmit,
}: ModalClientProps<T>) => {

    const handleSubmit = (values: T) => {
        onSubmit(values);
    }
    
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({values}) => {

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
                    type="button"
                    text="wprowadź dane"
                    color={theme.color.structural}
                                background={theme.color.remarkable}
                                onClick={() => handleSubmit(values)}
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

export default ModalClient;
