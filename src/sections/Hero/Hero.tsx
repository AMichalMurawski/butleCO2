import React from 'react';
import { HeroSection, Image, Title } from './Hero.styled';

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <Image />
      <Title>
        ButleCO2.pl - Twój niezawodny dostawca gazów technicznych i butli z dwutlenkiem węgla w
        Warszawie i okolicach.
      </Title>
    </HeroSection>
  );
};

export default Hero;
