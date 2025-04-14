import React from 'react';
import {
  AboutSection,
  Advanatage,
  AdvantageDescription,
  AdvantagesList,
  Description,
  IconWraper,
  TextBlock,
  Title,
} from './About.styled';
import IconSvg from '../../components/Icon/IconSvg';

const advantagesIcons = [
  ['clock', 'Szybkość'],
  ['coin-dollar', 'Cena'],
  ['stats-dots', 'Doświadczenie'],
  ['bubbles',"Obsługa"],
  ['user-check', 'Zaufanie'],
  ['checkmark', 'Bezpieczeństwo'],
];

const About: React.FC = () => {
  return (
    <AboutSection>
      <TextBlock>
        <Title>Poznaj ButleCO2.pl - Ekspertów od CO2 w Warszawie.</Title>
        <Description>
          Od ponad 15 lat dostarczamy butle z dwutlenkiem węgla na terenie Warszawy i okolic. Nasza
          firma powstała z pasji do wspierania lokalnych biznesów - od restauracji, biur i kawiarni po
          warsztaty przemysłowe i hobbystów akwarystyki. Stawiamy na niezawodność, elastyczność i
          pełne zadowolenie klienta, co potwierdza stale rosnąca liczba naszych partnerów. Nasz cel?
          Dostarczać gaz tam, gdzie jest potrzebny - szybko i bez zbędnych formalności.
        </Description>
      </TextBlock>
      <AdvantagesList>
        {advantagesIcons.map(advantage => (
          <Advanatage>
            <IconWraper>
              <IconSvg name={advantage[0]} fill="cyan" />
            </IconWraper>
            <AdvantageDescription>{advantage[1]}</AdvantageDescription>
          </Advanatage>
        ))}
      </AdvantagesList>
    </AboutSection>
  );
};

export default About;
