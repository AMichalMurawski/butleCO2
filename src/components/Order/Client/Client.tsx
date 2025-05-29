import React from 'react';
import { Subtitle, DataWraper, DataName, DataValue, ClientWraper, DataValueBox } from './Client.styled';
import IconEdit from './IconEdit';
import { clientAddress } from './clientAddress';
import { weekTimeLabels } from '../../../context/Order/orderKeyof';
import { WeekProps } from '../../../context/Order/orderProps';

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

  const deliveryArray = () => {
    let delivery: string[] = [];

    if (!initialValues.deliveryTime) {
      return [];
    };

    delivery = Object.keys(initialValues.deliveryTime).reduce((acc: any, key) => {
      const day = initialValues.deliveryTime[key];

      if (!day.isCheck) return acc

      const time = (pos: number) => `${day.time[pos].hour.toString().padStart(2, '0')}:${day.time[pos].minute.toString().padStart(2, '0')}`;
      const label = `${weekTimeLabels[key as keyof typeof weekTimeLabels]} ${time(0)} - ${time(1)}`;

      acc?.push(label)

      return acc
    }, [])

    return delivery
  };


  return (
    <ClientWraper $autoMargin={autoMargin} onClick={onClick}>
      <IconEdit />
      <Subtitle>{title}:</Subtitle>
      {Object.keys(initialValues).map(key => {
        const label = labels[key as keyof typeof labels];
        let value = initialValues[key as keyof typeof initialValues];
        
        if (key === "address") {
          value = clientAddress(initialValues)
        }

        if (key === 'deliveryTime') {
          return (
            <DataWraper key={key}>
              <DataName $width={labelWidth}>{label}:</DataName>
              {deliveryArray().length
                ? (<DataValueBox>{deliveryArray().map((key: string) => <DataValue>{key}</DataValue>)}</DataValueBox>)
                : (<DataValue></DataValue>)}
            </DataWraper>
          );
        };

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
