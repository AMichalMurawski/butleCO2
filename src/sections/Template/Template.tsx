import React from 'react';
import {
  Description,
  FormWraper,
  FormTemplate,
  Image,
  TemplateSection,
  TemplateWraper,
  Title,
} from './Template.styled';

const templates = [
  ['/images/order-template-01.webp', 'Template 01'],
  ['/images/order-template-02.webp', 'Template 02'],
  ['/images/order-template-03.webp', 'Template 03'],
  ['/images/order-template-04.webp', 'Template 04'],
  ['/images/order-template-05.webp', 'Template 05'],
  ['/images/order-template-06.webp', 'Template 06'],
  ['/images/order-template-07.webp', 'Template 07'],
];

const Templates: React.FC = () => {
  return (
    <TemplateSection id="orders">
      <FormTemplate>
        <FormWraper>
          <Title>Zamawiający:</Title>
          <Description>imię i nazwisko / nazwa firmy *</Description>
          <Description>adres dostawy *</Description>
          <Description>telefon</Description>
          <Description>email *</Description>
          <Description>dodatkowe informacje odnośnie dostawy</Description>
          <Description>faktura VAT (check button)</Description>
        </FormWraper>
        <FormWraper>
          <Title>Dane firmy:</Title>
          <Description>nazwa firmy *</Description>
          <Description>ulica *</Description>
          <Description>nr *</Description>
          <Description>lokal *</Description>
          <Description>kod pocztowy *</Description>
          <Description>miasto *</Description>
          <Description>NIP *</Description>
        </FormWraper>
        <FormWraper>
          <Title>Zamówienie:</Title>
          <Description>rodzaj butli</Description>
          <Description>ilość</Description>
          <Description>cena jednostkowa (liczone automatycznie)</Description>
          <Description>koszt (liczone automatycznie)</Description>
        </FormWraper>
      </FormTemplate>
      {templates.map(template => (
        <TemplateWraper>
          <Title>{template[1]}</Title>
          <Image src={template[0]} />
        </TemplateWraper>
      ))}
    </TemplateSection>
  );
};

export default Templates;
