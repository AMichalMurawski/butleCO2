import { ButtonWraper, DataList } from './ClientForm.styled';
import { Button } from '../../';
import { Formik } from 'formik';
import { initialAddress } from '../../../context/Order/initialValues';
import { addressLabels, addressTypes } from '../../../context/Order/orderKeyof';
import { AddressProps } from '../../../context/Order/orderProps';
import Input from '../InputField/InputField';
import { useTheme } from 'styled-components';
import { expandDeliveryTime, isFieldRequired, ModalClientProps } from './clientFormData';

const ClientForm = <T extends Record<string, any>>({
  labels,
  types,
  initialValues,
  onSubmit,
  validationSchema,
}: ModalClientProps<T>) => {
  const theme = useTheme();
  const initialDeliveryTime = initialValues.deliveryTime
    ? expandDeliveryTime(initialValues.deliveryTime)
    : [];

  const extendedInitialValues = !initialValues.deliveryTime
    ? initialValues
    : {
        ...initialValues,
        deliveryTime: initialDeliveryTime,
      };

  return (
    <Formik
      initialValues={extendedInitialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('values', values);

        if (!values.deliveryTime) {
          onSubmit(values);
          return;
        }

        const filteredDeliveryTime = values.deliveryTime.filter((day: any) => day.enabled);

        onSubmit({ ...values, deliveryTime: filteredDeliveryTime });
      }}
      validateOnMount={true}
      validateOnBlur={true}
      validateOnChange={false}
    >
      {({isValid}) => {
        return (
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
                  const label2 = required2
                    ? addressLabels[name2]
                    : `${addressLabels[name2]} (opcjonalnie)`;
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

              return <Input key={`${name}`} name={`${name}`} label={label} componentType={type} />;
            })}
            <ButtonWraper $disabled={!isValid}>
              <Button
                type="submit"
                text="Zatwierdź"
                color={!isValid ? theme.color.remarkable : theme.color.structural}
                background={!isValid ? theme.color.structuralTrans : theme.color.remarkable}
              />
            </ButtonWraper>
          </DataList>
        );
      }}
    </Formik>
  );
};

export default ClientForm;
