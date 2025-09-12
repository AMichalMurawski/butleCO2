import React from 'react';
import { HeroSection, Image, ImagesRoll, ImagesRollWraper, Sentence } from './Hero.styled';
import { H1, H2 } from '../../styles';

const images: string[] = [
  '/images/pracownik-napełniający-butle-gazem.webp',
  '/images/pracownik-kontrolujący-zabezpieczenia-butli.webp',
  '/images/pracownik-sprawdzający-szczelność-butli.webp',
];

const Hero: React.FC = () => {
  return (
    <HeroSection id="hero">
      <ImagesRollWraper>
        <ImagesRoll $imagesCount={images.length}>
          {[...images, images[0]].map((image: string, i: number) => (
            <Image key={i} $url={image} />
          ))}
        </ImagesRoll>
      </ImagesRollWraper>
      <Sentence>
        <H1>ButleCO2.pl</H1>
        <H2>
          Twój niezawodny dostawca gazów technicznych i butli z dwutlenkiem węgla w Warszawie i
          okolicach.
        </H2>
      </Sentence>
    </HeroSection>
  );
};

export default Hero;
