import * as Yup from 'yup';
import { DayOfWeek, DayProps, FieldType } from '../../../context/Order/orderProps';
import { weekTimeLabels } from '../../../context/Order/orderKeyof';

export const isFieldRequired = (schema: Yup.ObjectSchema<any>, path: string): boolean => {
  const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current: any = schema.describe();

  let isRequired = false;

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

  return isRequired;
};

const DaysOfWeekList: DayOfWeek[] = Object.keys(weekTimeLabels) as DayOfWeek[];

export const expandDeliveryTime = (selectedDays: DayProps[]) => {
  return DaysOfWeekList.map(day => {
    const found = selectedDays.find(d => d.day === day);

    if (found) {
      return {
        ...found,
      };
    }

    return {
      day,
      enabled: false,
      time: ['09:00', '17:00'],
    };
  });
};

export interface ModalClientProps<T> {
  labels: Record<keyof T, string>;
  types: Record<keyof T, FieldType>;
  initialValues: T;
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (values: T) => void;
}
