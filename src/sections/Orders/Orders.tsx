import React from "react";
import { Description, FormSection, FormTemplate, Image, OrderSection, Template, Title } from "./Orders.styled";

const templates = [
  ['/images/order-template-01.webp',
    'Template 01'
  ],
  ['/images/order-template-02.webp',
    'Template 02'
  ],
  ['/images/order-template-03.webp',
    'Template 03'
  ],
  ['/images/order-template-04.webp',
    'Template 04'
  ],
  ['/images/order-template-05.webp',
    'Template 05'
  ],
  ['/images/order-template-06.webp',
    'Template 06'
  ],
  ['/images/order-template-07.webp',
    'Template 07'
  ]
]

const Orders: React.FC = () => {
  return <OrderSection id="orders">
    <FormTemplate>
      <FormSection>
        <Title>Zamawiający:</Title>
        <Description>imię i nazwisko / nazwa firmy *</Description>
        <Description>adres dostawy *</Description>
        <Description>telefon</Description>
        <Description>email *</Description>
        <Description>dodatkowe informacje odnośnie dostawy</Description>
        <Description>faktura VAT (check button)</Description>
      </FormSection>
      <FormSection>
        <Title>Dane firmy:</Title>
        <Description>nazwa firmy *</Description>
        <Description>ulica *</Description>
        <Description>nr *</Description>
        <Description>lokal *</Description>
        <Description>kod pocztowy *</Description>
        <Description>miasto *</Description>
        <Description>NIP *</Description>
      </FormSection>
      <FormSection>
        <Title>Zamówienie:</Title>
        <Description>rodzaj butli</Description>
        <Description>ilość</Description>
        <Description>cena jednostkowa (liczone automatycznie)</Description>
        <Description>koszt (liczone automatycznie)</Description>
      </FormSection>
    </FormTemplate>
    {templates.map(template => 
      <Template>
        <Title>{template[1]}</Title>
        <Image src={template[0]} />
      </Template>
    )}
  </OrderSection>;
};

export default Orders;
