import * as Yup from 'yup';
import {
  CheckboxValue,
  DataList,
  SubmitButtonConteiner,
  TextareaValue,
  TextValue,
} from './ClientForm.styled';
import Button from '../../Button/Button';
import { theme } from '../../../styles/theme';
import { Formik, Form } from 'formik';
import { initialAddress } from '../../../context/Order/initialValues';
import { addressLabels, addressTypes, weekTimeLabels } from '../../../context/Order/orderKeyof';
import { AddressProps, DayOfWeek, DayProps, FieldType } from '../../../context/Order/orderProps';
import Input from '../InputField/InputField';

const isFieldRequired = (schema: Yup.ObjectSchema<any>, path: string): boolean => {
  const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current: any = schema.describe();

  let isRequired = false

  for (const part of parts) {
    if (current.type === 'array' && current.innerType) {
      current = current.innerType;
      if (!isNaN(Number(part))) {
        continue;
      }
      isRequired = !current.optional;
    }

    if (current.fields?.[part]) {
      current = current.fields[part];
      isRequired = !current.optional;
    } else {
      return false;
    }
  }

  return isRequired
} 

const DaysOfWeekList: DayOfWeek[] = Object.keys(weekTimeLabels) as DayOfWeek[];

const expandDeliveryTime = (selectedDays: DayProps[]) => {
  return DaysOfWeekList.map(day => {
    const found = selectedDays.find(d => d.day === day);

    if (found) {
      return {
        ...found,
        enabled: true,
      };
    }

    return {
      day,
      enabled: false,
      time: [
        { hour: 9, minute: 0 },
        { hour: 17, minute: 0 },
      ],
    };
  });
};

const typeComponentMap = {
  text: TextValue,
  textarea: TextareaValue,
  checkbox: CheckboxValue,
  weekTime: TextValue,
} as const;

interface ModalClientProps<T> {
  labels: Record<keyof T, string>;
  types: Record<keyof T, FieldType>;
  initialValues: T;
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (values: T) => void;
}

const ClientForm = <T extends Record<string, any>>({
  labels,
  types,
  initialValues,
  onSubmit,
  validationSchema,
}: ModalClientProps<T>) => {
  const initialDeliveryTime = initialValues.deliveryTime
    ? expandDeliveryTime(initialValues.deliveryTime)
    : [];
  
  const extendedInitialValues = !initialValues.deliveryTime ? initialValues : {
    ...initialValues,
    deliveryTime: initialDeliveryTime,
  };

  return (
    <Formik
      initialValues={extendedInitialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log('values', values);

        if (!values.deliveryTime) {
          onSubmit(values);
          return;
        }

        const filteredDeliveryTime = values.deliveryTime
          .filter((day: any) => day.enabled);

        onSubmit({ ...values, deliveryTime: filteredDeliveryTime });
      }}
      validateOnMount={true}
      validateOnBlur={true}
      validateOnChange={false}
    >
      {() => {
        return (
          <Form>
              <DataList>
                {Object.keys(initialValues).map(key => {
                  const name = String(key as keyof T);
                  const required = isFieldRequired(validationSchema, name);
                  const label = required ? labels[name] : `${labels[name]} (opcjonalnie)`;
                  const type = types[name];

                  if (key === 'address') {
                    return Object.keys(initialAddress).map(key2 => {
                      const name2 = key2 as keyof AddressProps;
                      const required2 = isFieldRequired(validationSchema, `address.${name2}`);
                      const label2 = required2 ? addressLabels[name2] : `${addressLabels[name2]} (opcjonalnie)`;
                      const type2 = addressTypes[name2];

                      return (
                        <Input
                          key={`address.${name2}`}
                          name={`address.${name2}`}
                          label={label2}
                          componentType={type2}
                        />
                      );
                    });
                  }

                  return (
                    <Input key={`${name}`} name={`${name}`} label={label} componentType={type} />
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default ClientForm;
