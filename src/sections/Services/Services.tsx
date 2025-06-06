import React from 'react';
import {
  ServiceDescription,
  ServiceImage,
  ServicePanel,
  ServicesList,
  ServicesSection,
  ServiceTitle,
  ServiceWraper,
  Title,
} from './Services.styled';
import Button from '../../components/Button/Button';
import { theme } from '../../styles/theme';

const servList = [
  [
    '/images/a39526cc-efcd-4efc-815a-341555e443be.jpg',
    'Napełnianie butli CO2',
    'Napełniamy butle CO2 na miejscu w naszym punkcie przy ul. Poprawnej 105A w Warszawie - najtaniej, najszybciej i od ręki! Gwarantujemy szybką obsługę, a dla zamówień hurtowych oferujemy rabaty i priorytetową realizację.',
    'Zadaj pytanie',
  ],
  [
    '/images/k9h6djkr9gd5nie5.jpg',
    'Butle do saturatorów wody',
    'Oferujemy wymianę lub napełnianie butli do saturatorów wody - ciesz się świeżą wodą gazowaną w domu lub biurze! U nas 20 zł za wymianę butli 425g i program lojalnościowy co dziesiąta wymiana butli gratis.',
    'Sprawdź asortyment',
  ],
  [
    '/images/016ccedf-777e-4777-a525-3652016e41bf.jpg',
    'Duży asortyment butli',
    'Oferujemy butle z CO2 w szerokim zakresie pojemności - od kompaktowych 0,3 kg idealnych do gazowania wody lub akwarystyki, po duże 50 kg dla przemysłu i gastronomii. Wszystkie nasze butle są atestowane i gotowe do użytku.',
    'Sprawdź asortyment',
  ],
  [
    '/images/2e066f5b-44d8-444d-836a-d4366a8f251e.jpg',
    'Szybka dostawa',
    'Dostarczamy butle i gaz pod wskazany adres na terenie Warszawy i okolic. Zamówienia złożone do 10:00 realizujemy jeszcze tego samego dnia - sprawdź nas!',
    'Zadaj pytanie',
  ],
  [
    '/images/4a2cbe5f-95f4-495f-960d-e1606fd83a2c.jpg',
    'Wynajem / sprzedaż butli CO2',
    'Elastyczne opcje dzierżawy lub sprzedaży butli, gdy nie posiadasz swojej',
    'Zadaj pytanie',
  ],
  [
    '/images/32af38a1-371d-4371-8cf0-6ccf41e03ddf.jpg',
    'Inne dostępne gazy',
    'Dostarczamy również Argon, Argon+CO2, Azot, Azot+CO2 w butlach 8L.',
    'Sprawdź asortyment',
  ],
];

const Services: React.FC = () => {
  return (
    <ServicesSection id="services">
      <Title>Nasza oferta - Butle CO2 i usługi dopasowane do Twoich potrzeb</Title>
      <ServicesList>
        {servList.map(serv => (
          <ServiceWraper key={serv[1]}>
            <ServiceImage $image={serv[0]} />
            <ServicePanel>
              <ServiceTitle>{serv[1]}</ServiceTitle>
              <ServiceDescription>{serv[2]}</ServiceDescription>
              <Button text={serv[3]} background={theme.color.remarkable} color={theme.color.main} />
            </ServicePanel>
          </ServiceWraper>
        ))}
      </ServicesList>
    </ServicesSection>
  );
};

export default Services;
