import React from 'react';
import {
  AboutBlock,
  AboutSection,
  Advantage,
  AdvantageBlock,
  AdvantagesList,
  ButtonsWraper,
  ButtonWraper,
  IconWraper,
  Title,
} from './About.styled';
import { Button, IconSvg } from '../../components';
import { useTheme } from 'styled-components';
import { useIdSection } from '../../context/Section/IdSectionContext';
import { advantages } from '../../utils';
import { P } from '../../styles';

const About: React.FC = () => {
  const theme = useTheme();
  const { scrollToSection } = useIdSection();

  return (
    <AboutSection id="about">
      <AboutBlock>
        <Title>Poznaj ButleCO2.pl - Ekspertów od CO2 w Warszawie</Title>
        <P>
          Od ponad 15 lat dostarczamy butle z dwutlenkiem węgla na terenie Warszawy i okolic. Nasza
          firma powstała z pasji do wspierania lokalnych biznesów - od restauracji, biur i kawiarni
          po warsztaty przemysłowe i hobbystów akwarystyki. Stawiamy na niezawodność, elastyczność i
          pełne zadowolenie klienta, co potwierdza stale rosnąca liczba naszych partnerów. Nasz cel?
          Dostarczać gaz tam, gdzie jest potrzebny - szybko i bez zbędnych formalności.
        </P>
        <Title>Gaz na czas</Title>
        <P>
          Specjalizujemy się w dostarczaniu butli z CO2 dla gastronomii, akwarystyki, saturatorów
          wody, przemysłu, biur i domu - wszystko z dostawą pod Twoje drzwi na terenie Warszawy i
          okolic.
        </P>
      </AboutBlock>
      <AdvantageBlock>
        <AdvantagesList>
          {advantages.map(advantage => (
            <Advantage key={advantage[1]} onClick={() => scrollToSection(`/#whyChooseUs${advantage[0].replace(/-/g, '')}`)}>
              <IconWraper>
                <IconSvg name={advantage[0]} size="2.5rem" />
                </IconWraper>
              <P $bold $fontSize='0.75rem'>{advantage[1]}</P>
            </Advantage>
          ))}
        </AdvantagesList>
        <ButtonsWraper>
          <ButtonWraper>
            <P $bold>Masz pytanie?</P>
            <Button
              text="Skontaktuj się z nami"
              background={theme.color.remarkable}
              color={theme.color.structural}
              onClick={() => scrollToSection('/#contactUs')}
            />
          </ButtonWraper>
          <ButtonWraper>
            <P $bold>Potrzebujesz butli?</P>
            <Button
              text="Złóż zamówienie"
              background={theme.color.remarkable}
              color={theme.color.structural}
              onClick={() => scrollToSection('/orders')}
            />
          </ButtonWraper>
        </ButtonsWraper>
      </AdvantageBlock>
    </AboutSection>
  );
};

export default About;
