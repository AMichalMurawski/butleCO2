import React from 'react';
import {
  AboutSection,
  Advanatage,
  AdvantageDescription,
  AdvantagesList,
  ButtonsWraper,
  ButtonWraper,
  ContentBlock,
  Description,
  IconWraper,
  TextBlock,
  Title,
} from './About.styled';
import { Button, IconSvg } from '../../components';
import { useTheme } from 'styled-components';
import { useIdSection } from '../../context/Section/IdSectionContext';

const advantagesIcons = [
  ['clock', 'Szybka Dostawa'],
  ['stats-dots', 'Duże Doświadczenie'],
  ['coin-dollar', 'Niska Cena'],
  ['user-check', 'Godne Zaufanie'],
  ['bubbles', 'Wykwalifikowana Obsługa'],
  ['checkmark', 'Pewne Bezpieczeństwo'],
];

const About: React.FC = () => {
  const theme = useTheme();
  const { scrollToSection } = useIdSection();

  return (
    <AboutSection id="about">
      <TextBlock>
        <Title>Poznaj ButleCO2.pl - Ekspertów od CO2 w Warszawie</Title>
        <Description>
          Od ponad 15 lat dostarczamy butle z dwutlenkiem węgla na terenie Warszawy i okolic. Nasza
          firma powstała z pasji do wspierania lokalnych biznesów - od restauracji, biur i kawiarni
          po warsztaty przemysłowe i hobbystów akwarystyki. Stawiamy na niezawodność, elastyczność i
          pełne zadowolenie klienta, co potwierdza stale rosnąca liczba naszych partnerów. Nasz cel?
          Dostarczać gaz tam, gdzie jest potrzebny - szybko i bez zbędnych formalności.
        </Description>
        <Title>Gaz na czas</Title>
        <Description>
          Specjalizujemy się w dostarczaniu butli z CO2 dla gastronomii, akwarystyki, saturatorów
          wody, przemysłu, biur i domu – wszystko z dostawą pod Twoje drzwi na terenie Warszawy i
          okolic.
        </Description>
      </TextBlock>
      <ContentBlock>
        <AdvantagesList>
          {advantagesIcons.map(advantage => (
            <Advanatage key={advantage[1]}>
              <IconWraper>
                <IconSvg name={advantage[0]} />
              </IconWraper>
              <AdvantageDescription>{advantage[1]}</AdvantageDescription>
            </Advanatage>
          ))}
        </AdvantagesList>
        <ButtonsWraper>
          <ButtonWraper>
            <Description>
              <b>Masz pytanie?</b>
            </Description>
            <Button
              type="button"
              text="Skontaktuj się z nami"
              background={theme.color.remarkable}
              color={theme.color.structural}
              idSection="contactUs"
              onClick={() => scrollToSection('/#contactUs')}
            />
          </ButtonWraper>
          <ButtonWraper>
            <Description>
              <b>Potrzebujesz butli?</b>
            </Description>
            <Button
              type="button"
              text="Złóż zamówienie"
              background={theme.color.remarkable}
              color={theme.color.structural}
              idSection="orders"
              onClick={() => scrollToSection('/orders')}
            />
          </ButtonWraper>
        </ButtonsWraper>
      </ContentBlock>
    </AboutSection>
  );
};

export default About;
