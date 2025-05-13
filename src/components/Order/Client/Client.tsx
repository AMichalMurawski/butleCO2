import React from 'react';
import { Subtitle, DataWraper, DataName, DataValue, ClientWraper } from './Client.styled';
import IconEdit from './IconEdit';

interface ModalClientProps<T> {
  title: string;
  labels: Record<keyof T, string>;
  initialValues: T;
  onClick: () => void;
  autoMargin?: 'left' | 'right';
  labelWidth?: string;
}

const Client: React.FC<ModalClientProps<any>> = ({
  title,
  labels,
  initialValues,
  onClick,
  autoMargin = 'right',
  labelWidth,
}) => {
  return (
    <ClientWraper $autoMargin={autoMargin} onClick={onClick}>
      <IconEdit />
      <Subtitle>{title}:</Subtitle>
      {Object.keys(initialValues).map(key => {
        const label = labels[key as keyof typeof labels]; // Pobieramy label z labels
        const value = initialValues[key as keyof typeof initialValues]; // Pobieramy wartość z initialValues

        return (
          <DataWraper key={key}>
            <DataName $width={labelWidth}>{label}:</DataName>
            <DataValue>{typeof value === 'boolean' ? (value ? 'Tak' : 'Nie') : value}</DataValue>
          </DataWraper>
        );
      })}
    </ClientWraper>
  );
};

export default Client;
