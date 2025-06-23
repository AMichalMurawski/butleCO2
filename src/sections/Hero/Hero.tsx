import React from 'react';
import { HeroSection, Image, ImagesRoll, ImagesRollWraper, Sentence } from './Hero.styled';
import { H1, H2 } from '../../styles/Global.styled';

const images: string[] = [
  '/images/kdo3ud733dh3j48f.jpg',
  '/images/od8d22jstd9fj3bda.jpg',
  '/images/sofh4dff933kaif93jd.jpg',
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
        <H2 $fontSize="36px">
          Twój niezawodny dostawca gazów technicznych i butli z dwutlenkiem węgla w Warszawie i
          okolicach.
        </H2>
      </Sentence>
    </HeroSection>
  );
};

export default Hero;
