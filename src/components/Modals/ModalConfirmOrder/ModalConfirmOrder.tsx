import React from 'react';
import { useOrder } from '../../../context/Order/OrderContext';
import {
  ConfirmOrderWraper,
  InvoiceWraper,
  SegmentWraper,
  Subtitle,
  TextLine,
  TextTitle,
  TextValue,
  Title,
  TitleWraper,
} from './ModalConfirmOrder.styled';
import { WeekProps } from '../../../context/Order/orderProps';
import { weekTimeLabels } from '../../../context/Order/orderKeyof';

const ModalConfirmOrder: React.FC = () => {
  const { order } = useOrder();

  return (
    <ConfirmOrderWraper>
      <TitleWraper>
        <Title>Twoje zamówienie:</Title>
      </TitleWraper>
      <InvoiceWraper>
        <SegmentWraper>
          <Title>Klient:</Title>
          <TextLine>
            <TextTitle>Imię i Nazwisko / Nazwa firmy:</TextTitle>
            <TextValue>{order.client.name}</TextValue>
          </TextLine>
          <TextLine>
            <TextTitle>Telefon kontaktowy:</TextTitle>
            <TextValue>{order.client.phone}</TextValue>
          </TextLine>
          <TextLine>
            <TextTitle>Email:</TextTitle>
            <TextValue>{order.client.email}</TextValue>
          </TextLine>
          <TextLine>
            <TextTitle>Address dostawy:</TextTitle>
            <TextValue>
              {order.client.address.street} {order.client.address.number}
              {order.client.address.local ? ` lok. ${order.client.address.local}` : null},{' '}
              {order.client.address.postalCode} {order.client.address.city}
            </TextValue>
          </TextLine>
          <TextLine>
            <TextTitle>Godziny dostawy:</TextTitle>
            <TextValue>
              {Object.keys(order.client.deliveryTime).reduce((acc, dayKey) => {
                const day = String(dayKey) as keyof WeekProps;
                const dayTime = order.client.deliveryTime[day];

                if (dayTime.isCheck) {
                  const startTime = `${dayTime.time[0].hour.toString().padStart(2, '0')}:${dayTime.time[0].minute.toString().padStart(2, '0')}`;
                  const endTime = `${dayTime.time[1].hour.toString().padStart(2, '0')}:${dayTime.time[1].minute.toString().padStart(2, '0')}`;
                  const label = `${weekTimeLabels[day]} ${startTime} - ${endTime}`;

                  return acc ? `${acc} | ${label}` : label;
                }

                return acc;
              }, '')}
            </TextValue>
            {/* {Object.keys(order.client.deliveryTime).map(dayKey => {
              const day = String(dayKey) as keyof WeekProps;
              const dayTime = order.client.deliveryTime[day];

              if (dayTime.isCheck) {
                const startTime = `${dayTime.time[0].hour.toString().padStart(2, '0')}:${dayTime.time[0].minute.toString().padStart(2, '0')}`;
                const endTime = `${dayTime.time[1].hour.toString().padStart(2, '0')}:${dayTime.time[1].minute.toString().padStart(2, '0')}`;
                const label = `${weekTimeLabels[day]} ${startTime} - ${endTime}`;

                return <TextValue>{label}</TextValue>;
              }

              return <></>;
            }, '')} */}
          </TextLine>
          <TextLine>
            <TextTitle>Informacje do dostawy:</TextTitle>
            <TextValue>{order.client.message}</TextValue>
          </TextLine>
        </SegmentWraper>
        {order.client.invoice && (
          <SegmentWraper>
            <Title>Faktura:</Title>
            <TextLine>
              <TextTitle>Nazwa firmy:</TextTitle>
              <TextValue>{order.company.name}</TextValue>
            </TextLine>
            <TextLine>
              <TextTitle>Adres:</TextTitle>
              <TextValue>
                {order.company.address.street} {order.company.address.number}
                {order.company.address.local ? ` lok. ${order.company.address.local}` : null},{' '}
                {order.company.address.postalCode} {order.company.address.city}
              </TextValue>
            </TextLine>
            <TextLine>
              <TextTitle>NIP:</TextTitle>
              <TextValue>{order.company.NIP}</TextValue>
            </TextLine>
          </SegmentWraper>
        )}
        <SegmentWraper>
          <Title>Lista butli:</Title>
          <Subtitle>wymiana:</Subtitle>
          {order.products.map(product => {
            if (product.transaction !== false) return <></>;
            return (
              <TextLine>
                <TextTitle>
                  {product.type} - {product.weight ? `${product.weight} kg` : `${product.litr} l`}:
                </TextTitle>
                <TextValue>
                  {product.unitPrice}PLN x {product.amount}szt. = {product.price}PLN
                </TextValue>
              </TextLine>
            );
          })}
          <Subtitle>zakup:</Subtitle>
          {order.products.map(product => {
            if (product.transaction !== true) return <></>;
            return (
              <TextLine>
                <TextTitle>
                  {product.type} - {product.weight ? `${product.weight} kg` : `${product.litr} l`}:
                </TextTitle>
                <TextValue>
                  {product.unitPrice}PLN x {product.amount}szt. = {product.price}PLN
                </TextValue>
              </TextLine>
            );
          })}
        </SegmentWraper>
        <SegmentWraper>
          <Title>Całkowity koszt zamówienia:</Title>
          <TextLine>
            <TextTitle>Koszt butli:</TextTitle>
            <TextValue>{order.summary.productsCost}PLN</TextValue>
          </TextLine>
          <TextLine>
            <TextTitle>Koszt dostawy:</TextTitle>
            <TextValue>{order.summary.deliveryCost}PLN</TextValue>
          </TextLine>
          <TextLine>
            <TextTitle>Koszt zamówienia:</TextTitle>
            <TextValue>{order.summary.summaryCost}PLN</TextValue>
          </TextLine>
        </SegmentWraper>
      </InvoiceWraper>
    </ConfirmOrderWraper>
  );
};

export default ModalConfirmOrder;
