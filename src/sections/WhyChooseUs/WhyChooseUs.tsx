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
import { IconSvg } from '../../components';
import { theme } from '../../styles/theme';
import { advantages } from '../../utils';

const WhyChooseUs: React.FC = () => {
  return (
    <WhyChooseUsSection id="whyChooseUs">
      <Title>Dlaczego ButleCO2.pl to Twój najlepszy wybór?</Title>
      <AdvantagesList>
        {advantages.map((advantage, index) => (
          <AdvantageWraper key={advantage[1]} $direction={index % 2 == 0 ? 'left' : 'right'}>
            <IconWraper>
              <IconSvg name={advantage[0]} size="90px" fill={theme.color.hightlight} />
            </IconWraper>
            <AdvantageContent>
              <Subtitle>{advantage[1]}</Subtitle>
              <Description>{advantage[2]}</Description>
            </AdvantageContent>
          </AdvantageWraper>
        ))}
      </AdvantagesList>
    </WhyChooseUsSection>
  );
};

export default WhyChooseUs;
