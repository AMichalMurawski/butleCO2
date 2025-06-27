import React from 'react';
import {
  DataWraper,
  DataName,
  DataValue,
  ClientWraper,
  DataValueBox,
  EditIconWraper,
} from './Client.styled';
import { clientAddress } from './clientAddress';
import { weekTimeLabels } from '../../../context/Order/orderKeyof';
import { DayProps } from '../../../context/Order/orderProps';
import { H3 } from '../../../styles';
import IconSvg from '../../Icons/IconSvg/IconSvg';
import { useTheme } from 'styled-components';

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
  const theme = useTheme();
  
  const deliveryArray = () => {
    if (!initialValues.deliveryTime || !Array.isArray(initialValues.deliveryTime)) {
      return [];
    }

    const delivery: string[] = initialValues.deliveryTime.map((day: DayProps) => {
      const time = (pos: number) =>
        `${day.time[pos].hour.toString().padStart(2, '0')}:${day.time[pos].minute.toString().padStart(2, '0')}`;
      const label = `${weekTimeLabels[day.day]} ${time(0)} - ${time(1)}`;

      return label;
    }, []);

    return delivery;
  };

  return (
    <ClientWraper $autoMargin={autoMargin} onClick={onClick}>
      <EditIconWraper>
        <IconSvg name="pencil" size="20px" fill={theme.color.structural} />
      </EditIconWraper>
      <H3>{title}:</H3>
      {Object.keys(initialValues).map(key => {
        const label = labels[key as keyof typeof labels];
        let value = initialValues[key as keyof typeof initialValues];

        if (key === 'address') {
          value = clientAddress(initialValues);
        }

        if (key === 'deliveryTime') {
          return (
            <DataWraper key={key}>
              <DataName $width={labelWidth}>{label}:</DataName>
              {deliveryArray().length ? (
                <DataValueBox>
                  {deliveryArray().map((day: string, index) => (
                    <DataValue key={index}>{day}</DataValue>
                  ))}
                </DataValueBox>
              ) : (
                <DataValue></DataValue>
              )}
            </DataWraper>
          );
        }


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
