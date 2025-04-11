import React from 'react';
import { HeroSection, Image, Sentence, Subtitle, Title } from './Hero.styled';

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <Image />
      <Sentence>
        <Title>ButleCO2.pl</Title>
        <Subtitle>Twój niezawodny dostawca <i>gazów technicznych</i></Subtitle>
        <Subtitle>i <i>butli z dwutlenkiem węgla</i> w Warszawie i okolicach.</Subtitle>
      </Sentence>
    </HeroSection>
  );
};

export default Hero;
