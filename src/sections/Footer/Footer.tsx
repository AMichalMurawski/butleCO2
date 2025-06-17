import React from 'react';
import {
  DataBox,
  DataWraper,
  FooterConteiner,
  FooterWraper,
  IconWraper,
  MediaBox,
  PrivacyPolicy,
} from './Footer.styled';
import { IconSvg } from '../../components';
import { H4, IconLink, Link, P } from '../../styles/Global.styled';

const Footer: React.FC = () => {
  return (
    <FooterWraper>
      <FooterConteiner>
        <DataWraper>
          <DataBox>
            <H4>Dane firmy:</H4>
            <P>ButleCO2.PL Artur Rembek</P>
            <P>ul. Poprawna 105A</P>
            <P>03-984 Warszawa</P>
            <P>NIP: 9522030252</P>
          </DataBox>
          <DataBox>
            <H4>Kontakt:</H4>
            <P>
              Telefon: <Link href="tel:(+48)500612755">500-612-755</Link>
            </P>
            <P>
              Email: <Link href="mailto:biuro@butleco2.pl">biuro@butleco2.pl</Link>
            </P>
            <P>Śledź nas:</P>
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
            <H4>Polityka i regulamin:</H4>
            <P>
              <Link href="/privacy-policy">Polityka prywatności</Link>
            </P>
            <P>
              <Link href="/terms-of-service">Regulamin</Link>
            </P>
            <P>
              <Link href="data-protection-policy">Zasady ochrony danych</Link>
            </P>
            <P>
              <Link href="faq">FAQ</Link>
            </P>
          </DataBox>
        </DataWraper>
        <PrivacyPolicy>
          <P>© 2025 ButleCO2.pl - Twój partner w dostawach CO2.</P>
          <P>Wszystkie prawa zastrzeżone.</P>
          <P>Projekt i realizacja strony: Michał Murawski</P>
        </PrivacyPolicy>
      </FooterConteiner>
    </FooterWraper>
  );
};

export default Footer;
