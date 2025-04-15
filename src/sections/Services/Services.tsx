import React from "react";
import { ServiceDescription, ServiceImage, ServicesList, ServicesSection, ServiceTitle, ServiceWraper, Title } from "./Services.styled";

const servList = [
  ['/images/Jm84YtVxLqRZwEp1FbN2.jpg',
    'Butle CO2',
    'Oferujemy butle z CO2 w szerokim zakresie pojemności - od kompaktowych 0,3 kg idealnych do gazowania wody lub akwarystyki, po duże 50 kg dla przemysłu i gastronomii. Wszystkie nasze butle są atestowane i gotowe do użytku.'],
  ['/images/fT7LmYq2ZpXvWKaE19Bu.jpg',
    'Napełnianie butli',
    'Napełniamy butle CO2 na miejscu w naszym punkcie przy ul. Poprawnej 105A w Warszawie - najtaniej, najszybciej i od ręki! Gwarantujemy szybką obsługę, a dla zamówień hurtowych oferujemy rabaty i priorytetową realizację.'],
  ['/images/N3ePzXtMwbqL7oAFK4vJ.jpg',
    'Wynajem',
    'Elastyczne opcje dzierżawy lub sprzedaży butli, gdy nie posiadasz swojej'],
  ['/images/Jm84YtVxLqRZwEp1FbN2.jpg',
    'Dostawa',
    'Dostarczamy butle i gaz pod wskazany adres na terenie Warszawy i okolic. Zamówienia złożone do 10:00 realizujemy jeszcze tego samego dnia - sprawdź nas!'],
  ['/images/fT7LmYq2ZpXvWKaE19Bu.jpg',
    'Inne gazy',
    'Dostarczamy również Argon, Argon+CO2, Azot, Azot+CO2 w butlach 8L.'],
  ['/images/N3ePzXtMwbqL7oAFK4vJ.jpg',
    'Saturatory wody',
    'Oferujemy wymianę lub napełnianie butli do saturatorów wody - ciesz się świeżą wodą gazowaną w domu lub biurze!'
  ]
]


const Services: React.FC = () => {
  return <ServicesSection>
    <Title>Nasza oferta - Butle CO2 i usługi dopasowane do Twoich potrzeb</Title>
    <ServicesList>
        {servList.map(serv => (
          <ServiceWraper>
            <ServiceImage image={serv[0]} />
            <ServiceTitle>{serv[1]}</ServiceTitle>
            <ServiceDescription>{serv[2]}</ServiceDescription>
          </ServiceWraper >
        ))}
    </ServicesList>
  </ServicesSection>;
};

export default Services;
