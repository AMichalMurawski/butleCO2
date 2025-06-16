import React from 'react';
import {
  DataBox,
  DataWraper,
  FooterConteiner,
  FooterWraper,
  IconLink,
  IconWraper,
  Link,
  MediaBox,
  PrivacyPolicy,
  Subtitle,
  Text,
} from './Footer.styled';
import { IconSvg } from '../../components';
import { useIdSection } from '../../context/Section/IdSectionContext';

const Footer: React.FC = () => {
  const { scrollToSection } = useIdSection();

  return (
    <FooterWraper>
      <FooterConteiner>
        <DataWraper>
          <DataBox>
            <Subtitle>Dane firmy:</Subtitle>
            <Text>ButleCO2.PL Artur Rembek</Text>
            <Text>ul. Poprawna 105A</Text>
            <Text>03-984 Warszawa</Text>
            <Text>NIP: 9522030252</Text>
          </DataBox>
          <DataBox>
            <Subtitle>Kontakt:</Subtitle>
            <Text>
              Telefon: <Link href="tel:(+48)500612755">500-612-755</Link>
            </Text>
            <Text>
              Email: <Link href="mailto:biuro@butleco2.pl">biuro@butleco2.pl</Link>
            </Text>
            <Text>Śledź nas:</Text>
            <MediaBox>
              <IconLink href="http://facebook.com">
                <IconWraper>
                  <IconSvg name="facebook" />
                </IconWraper>
              </IconLink>
              <IconLink href="http://instagram.com">
                <IconWraper>
                  <IconSvg name="instagram" />
                </IconWraper>
              </IconLink>
            </MediaBox>
          </DataBox>
          <DataBox>
            <Subtitle>Polityka i regulamin:</Subtitle>
            <Text>
              <Link href="/privacy-policy">Polityka prywatności</Link>
            </Text>
            <Text>
              <Link href="/terms-of-service">Regulamin</Link>
            </Text>
            <Text>
              <Link href="data-protection-policy">Zasady ochrony danych</Link>
            </Text>
            <Text>
              <Link href="faq">FAQ</Link>
            </Text>
          </DataBox>
        </DataWraper>
        <PrivacyPolicy>
          <Text>© 2025 ButleCO2.pl - Twój partner w dostawach CO2.</Text>
          <Text>Wszystkie prawa zastrzeżone.</Text>
          <Text>Projekt i realizacja strony: Michał Murawski</Text>
        </PrivacyPolicy>
      </FooterConteiner>
    </FooterWraper>
  );
};

export default Footer;
