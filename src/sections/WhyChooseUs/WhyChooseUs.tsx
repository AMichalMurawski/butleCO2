import React from 'react';
import {
  AdvantageWraper,
  AdvantagesList,
  ContentWraper,
} from './WhyChooseUs.styled';
import { IconSvg } from '../../components';
import { theme } from '../../styles/theme';
import { advantages } from '../../utils';
import { H2, H3, P, Section } from '../../styles';

const WhyChooseUs: React.FC = () => {
  return (
    <Section id="dlaczegoMy">
      <H2>Dlaczego ButleCO2.pl to Twój najlepszy wybór?</H2>
      <AdvantagesList>
        {advantages.map((advantage, index) => (
          <AdvantageWraper key={advantage[1]} id={`dlaczegoMy-${advantage[3]}`} $direction={index % 2 == 0 ? 'left' : 'right'}>
            <ContentWraper>
              <IconSvg name={advantage[0]} size='5.5rem' fill={theme.color.hightlight} />
            </ContentWraper>
            <ContentWraper>
              <H3>{advantage[1]}</H3>
              <P>{advantage[2]}</P>
            </ContentWraper>
          </AdvantageWraper>
        ))}
      </AdvantagesList>
    </Section>
  );
};

export default WhyChooseUs;
