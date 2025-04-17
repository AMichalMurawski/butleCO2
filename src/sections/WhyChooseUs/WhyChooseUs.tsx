import React from 'react';
import {
  AdvantageContent,
  AdvantageWraper,
  AdvantagesList,
  Description,
  IconWraper,
  Subtitle,
  Title,
  WhyChooseUsSection,
} from './WhyChooseUs.styled';
import IconSvg from '../../components/Icon/IconSvg';

const whyWeList = [
  [
    'clock',
    'Szybka Dostawa',
    'Dzięki własnemu magazynowi, rozlewni i zoptymalizowanej logistyce 90% zamówień trafia do klientów w ciągu kilku godzin - idealne, gdy gaz potrzebny jest na już.',
  ],
  [
    'stats-dots',
    'Duże Doświadczenie',
    'Przez 15 lat zbudowaliśmy solidną wiedzę i sieć kontaktów, co pozwala nam sprostać nawet najtrudniejszym wyzwaniom naszych klientów.',
  ],
  [
    'coin-dollar',
    'Niska Cena',
    'Oferujemy konkurencyjne ceny - minimalne zamówienie to tylko 100 zł, im więcej butli zamówisz, tym niższa będzie średnia cena za 1 szt.',
  ],
  [
    'user-check',
    'Godne Zaufanie',
    'Nasi klienci oceniają nas na 4,8/5 w Google - zajrzyj do opinii, by przekonać się, że warto nam zaufać.',
  ],
  [
    'bubbles',
    'Wykwalifikowana Obsługa',
    'Każdy klient jest dla nas ważny - doradzimy, dopasujemy ofertę i rozwiążemy Twój problem, niezależnie od skali zamówienia.',
  ],
  [
    'checkmark',
    'Pewne Bezpieczeństwo',
    'Posiadamy certyfikaty potwierdzające, że nasz CO2 jest przeznaczony do celów spożywczych.',
  ],
];

const WhyChooseUs: React.FC = () => {
  return (
    <WhyChooseUsSection id="whyChooseUs">
      <Title>Dlaczego ButleCO2.pl to Twój najlepszy wybór?</Title>
      <AdvantagesList>
        {whyWeList.map((whywe, index) => (
          <AdvantageWraper key={index} direction={index % 2 == 0 ? 'left' : 'right'}>
            <IconWraper>
              <IconSvg name={whywe[0]} size="90px" fill="cyan" />
            </IconWraper>
            <AdvantageContent>
              <Subtitle>{whywe[1]}</Subtitle>
              <Description>{whywe[2]}</Description>
            </AdvantageContent>
          </AdvantageWraper>
        ))}
      </AdvantagesList>
    </WhyChooseUsSection>
  );
};

export default WhyChooseUs;
