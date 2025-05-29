import * as Yup from 'yup';
import {
  CheckboxValue,
  ClientInfoWraper,
  DataList,
  SubmitButtonConteiner,
  Subtitle,
  SubtitleWraper,
  TextareaValue,
  TextValue,
} from './ClientForm.styled';
import Button from '../../Button/Button';
import { theme } from '../../../styles/theme';
import { Formik, Form } from 'formik';
import { initialAddress } from '../../../context/Order/initialValues';
import { addressLabels, addressTypes, weekTimeLabels } from '../../../context/Order/orderKeyof';
import { AddressProps, DayOfWeek, DayProps } from '../../../context/Order/orderProps';
import Input from '../InputField/InputField';

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
  title: string;
  labels: Record<keyof T, string>;
  types: Record<keyof T, keyof typeof typeComponentMap>;
  initialValues: T;
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (values: T) => void;
}

const ClientForm = <T extends Record<string, any>>({
  title,
  labels,
  types,
  initialValues,
  onSubmit,
  validationSchema,
}: ModalClientProps<T>) => {
  const initialDeliveryTime = initialValues.deliveryTime
    ? expandDeliveryTime(initialValues.deliveryTime)
    : [];

  const extendedInitialValues = {
    ...initialValues,
    deliveryTime: initialDeliveryTime,
  };

  return (
    <Formik
      initialValues={extendedInitialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        const filteredDeliveryTime = values.deliveryTime
          .filter((day: any) => day.enabled)
          .map(({ enabled, ...rest }: any) => rest);

        onSubmit({ ...values, deliveryTime: filteredDeliveryTime });
      }}
      validateOnMount={true}
      validateOnBlur={true}
      validateOnChange={false}
    >
      {({ values }) => {
        return (
          <Form>
            <ClientInfoWraper>
              <SubtitleWraper>
                <Subtitle>{title}</Subtitle>
              </SubtitleWraper>
              <DataList>
                {Object.keys(initialValues).map(key => {
                  const name = String(key as keyof T);
                  const label = labels[name];
                  const type = types[name];

                  if (key === 'address') {
                    return Object.keys(initialAddress).map(key2 => {
                      const name2 = key2 as keyof AddressProps;
                      const label2 = addressLabels[name2];
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
            </ClientInfoWraper>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ClientForm;
