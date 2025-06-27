import React from 'react';
import { useOrder } from '../../../context/Order/OrderContext';
import {
  InvoiceWraper,
  SegmentWraper,
  Subtitle,
  TextLine,
  Title,
} from './ModalConfirmOrder.styled';
import { weekTimeLabels } from '../../../context/Order/orderKeyof';
import { P } from '../../../styles';

const ModalConfirmOrder: React.FC = () => {
  const { order } = useOrder();

  return (
      <InvoiceWraper>
        <SegmentWraper>
          <Title>Klient:</Title>
          <TextLine>
            <P $fontStyle='italic'>Imię i Nazwisko / Nazwa firmy:</P>
            <P $bold>{order.client.name}</P>
          </TextLine>
          <TextLine>
            <P>Telefon kontaktowy:</P>
            <P $bold>{order.client.phone}</P>
          </TextLine>
          <TextLine>
            <P>Email:</P>
            <P $bold>{order.client.email}</P>
          </TextLine>
          <TextLine>
            <P>Address dostawy:</P>
            <P $bold>
              {order.client.address.street} {order.client.address.number}
              {order.client.address.local ? ` lok. ${order.client.address.local}` : null},{' '}
              {order.client.address.postalCode} {order.client.address.city}
            </P>
          </TextLine>
          <TextLine>
            <P>Godziny dostawy:</P>
            <P $bold>
              {order.client.deliveryTime
                .map(day => {
                  const startTime = `${day.time[0].hour.toString().padStart(2, '0')}:${day.time[0].minute.toString().padStart(2, '0')}`;
                  const endTime = `${day.time[1].hour.toString().padStart(2, '0')}:${day.time[1].minute.toString().padStart(2, '0')}`;
                  return `${weekTimeLabels[day.day]} ${startTime} - ${endTime}`;
                })
                .join(' | ')}
            </P>
          </TextLine>
          <TextLine>
            <P>Informacje do dostawy:</P>
            <P $bold>{order.client.message}</P>
          </TextLine>
        </SegmentWraper>
        {order.client.invoice && (
          <SegmentWraper>
            <Title>Faktura:</Title>
            <TextLine>
              <P>Nazwa firmy:</P>
              <P $bold>{order.company.name}</P>
            </TextLine>
            <TextLine>
              <P>Adres:</P>
              <P $bold>
                {order.company.address.street} {order.company.address.number}
                {order.company.address.local ? ` lok. ${order.company.address.local}` : null},{' '}
                {order.company.address.postalCode} {order.company.address.city}
              </P>
            </TextLine>
            <TextLine>
              <P>NIP:</P>
              <P $bold>{order.company.NIP}</P>
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
                <P>
                  {product.type} - {product.weight ? `${product.weight} kg` : `${product.litr} l`}:
                </P>
                <P $bold>
                  {product.unitPrice}PLN x {product.amount}szt. = {product.price}PLN
                </P>
              </TextLine>
            );
          })}
          <Subtitle>zakup:</Subtitle>
          {order.products.map((product, index) => {
            if (product.transaction !== true) return null;
            return (
              <TextLine key={index}>
                <P>
                  {product.type} - {product.weight ? `${product.weight} kg` : `${product.litr} l`}:
                </P>
                <P $bold>
                  {product.unitPrice}PLN x {product.amount}szt. = {product.price}PLN
                </P>
              </TextLine>
            );
          })}
        </SegmentWraper>
        <SegmentWraper>
          <Title>Całkowity koszt zamówienia:</Title>
          <TextLine>
            <P>Koszt butli:</P>
            <P $bold>{order.summary.productsCost}PLN</P>
          </TextLine>
          <TextLine>
            <P>Koszt dostawy:</P>
            <P $bold>{order.summary.deliveryCost}PLN</P>
          </TextLine>
          <TextLine>
            <P>Koszt zamówienia:</P>
            <P $bold>{order.summary.summaryCost}PLN</P>
          </TextLine>
        </SegmentWraper>
      </InvoiceWraper>
  );
};

export default ModalConfirmOrder;
