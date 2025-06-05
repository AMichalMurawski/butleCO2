import React from 'react';
import { useOrder } from '../../../context/Order/OrderContext';
import {
  InvoiceWraper,
  SegmentWraper,
  Subtitle,
  TextLine,
  TextTitle,
  TextValue,
  Title,
} from './ModalConfirmOrder.styled';
import { weekTimeLabels } from '../../../context/Order/orderKeyof';

const ModalConfirmOrder: React.FC = () => {
  const { order } = useOrder();

  return (
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
              {order.client.deliveryTime
                .map(day => {
                  const startTime = `${day.time[0].hour.toString().padStart(2, '0')}:${day.time[0].minute.toString().padStart(2, '0')}`;
                  const endTime = `${day.time[1].hour.toString().padStart(2, '0')}:${day.time[1].minute.toString().padStart(2, '0')}`;
                  return `${weekTimeLabels[day.day]} ${startTime} - ${endTime}`;
                })
                .join(' | ')}
            </TextValue>
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
              <TextLine key={product.type + " " + product.weight + product.litr}>
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
  );
};

export default ModalConfirmOrder;
