import React from 'react';
import {
  HeadingWraper,
  ServiceImage,
  ServicePanel,
  ServicesList,
  ServiceWraper,
} from './Services.styled';
import { Button } from '../../components';
import { theme } from '../../styles/theme';
import { H2, H3, P, Section } from '../../styles';
import { useIdSection } from '../../context/Section/IdSectionContext';

const servList = [
  [
    '/images/pracownik-napełniający-butle-z-gazem.webp',
    'Napełnianie butli CO2',
    'Napełniamy butle CO2 na miejscu w naszym punkcie przy ul. Poprawnej 105A w Warszawie - najtaniej, najszybciej i od ręki! Gwarantujemy szybką obsługę, a dla zamówień hurtowych oferujemy rabaty i priorytetową realizację.',
    'Zadaj pytanie',
    '/#kontakt',
  ],
  [
    '/images/butla-do-saturatora-wody.webp',
    'Butle do saturatorów wody',
    'Oferujemy wymianę lub napełnianie butli do saturatorów wody - ciesz się świeżą wodą gazowaną w domu lub biurze! U nas 20 zł za wymianę butli 425g i program lojalnościowy co dziesiąta wymiana butli gratis.',
    'Złóż zamówienie',
    '/zamowienia#zamowienia',
  ],
  [
    '/images/asortyment-butli-od-najmniejszej-do-największej.webp',
    'Duży asortyment butli',
    'Oferujemy butle z CO2 w szerokim zakresie pojemności - od kompaktowych 0,3 kg idealnych do gazowania wody lub akwarystyki, po duże 50 kg dla przemysłu i gastronomii. Wszystkie nasze butle są atestowane i gotowe do użytku.',
    'Złóż zamówienie',
    '/zamowienia#zamowienia',
  ],
  [
    '/images/samochód-dostawczy-z-butlami-szybko-jadący-do-klienta.webp',
    'Szybka dostawa',
    'Dostarczamy butle i gaz pod wskazany adres na terenie Warszawy i okolic. Zamówienia złożone do 10:00 realizujemy jeszcze tego samego dnia - sprawdź nas!',
    'Zadaj pytanie',
    '/#kontakt',
  ],
  [
    '/images/dwie-butle-na-białym-tle-ze-znakami-klucza-i-dokumentu.webp',
    'Wynajem / sprzedaż butli CO2',
    'Elastyczne opcje dzierżawy lub sprzedaży butli, gdy nie posiadasz swojej',
    'Zadaj pytanie',
    '/#kontakt',
  ],
  [
    '/images/butle-z-oznaczeniami-różnych-gazów.webp',
    'Inne dostępne gazy',
    'Dostarczamy również Argon, Argon+CO2, Azot, Azot+CO2 w butlach 8L.',
    'Złóż zamówienie',
    '/zamowienia#zamowienia',
  ],
];

const Services: React.FC = () => {
  const { scrollToSection } = useIdSection();

  return (
    <Section id="oferta">
      <H2>Nasza oferta - Butle CO2 i usługi dopasowane do Twoich potrzeb</H2>
      <ServicesList>
        {servList.map(serv => (
          <ServiceWraper key={serv[1]}>
            <ServiceImage $url={serv[0]} />
            <ServicePanel>
              <HeadingWraper>
                <H3>{serv[1]}</H3>
              </HeadingWraper>
              <P>{serv[2]}</P>
              <Button
                text={serv[3]}
                background={theme.color.remarkable}
                color={theme.color.main}
                onClick={() => scrollToSection(serv[4])}
              />
            </ServicePanel>
          </ServiceWraper>
        ))}
      </ServicesList>
    </Section>
  );
};

export default Services;
