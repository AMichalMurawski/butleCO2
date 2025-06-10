import React from 'react';
import {
  HeroSection,
  ImageBg,
  ImagesRoll,
  ImagesRollWraper,
  Sentence,
  Subtitle,
  Title,
} from './Hero.styled';

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
            <ImageBg key={i} $url={image} />
          ))}
        </ImagesRoll>
      </ImagesRollWraper>
      <Sentence>
        <Title>ButleCO2.pl</Title>
        <Subtitle>
          Twój niezawodny dostawca <i>gazów technicznych</i>
        </Subtitle>
        <Subtitle>
          i <i>butli z dwutlenkiem węgla</i> w Warszawie i okolicach.
        </Subtitle>
      </Sentence>
    </HeroSection>
  );
};

export default Hero;
