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
import { H4, Link, P } from '../../styles';
import { useConfig } from '../../context/Config/ConfigContext';

const Footer: React.FC = () => {
  const config = useConfig();

  return (
    <FooterWraper>
      <FooterConteiner>
        <DataWraper>
          <DataBox $order={[1, 1, 1]}>
            <H4>Dane firmy:</H4>
            <P>{config.name}</P>
            <P>
              ul. {config.street} {config.nr}
            </P>
            <P>
              {config.postalCode} {config.city}
            </P>
            <P>NIP: {config.NIP}</P>
          </DataBox>
          <DataBox $order={[2, 3, 2]}>
            <H4>Kontakt:</H4>
            <P>
              Telefon: <Link href={`tel:${config.phone[0][0]}`}>{config.phone[0][1]}</Link>
            </P>
            <P>
              Email: <Link href={`mailto:${config.email}`}>{config.email}</Link>
            </P>
            <P>Śledź nas:</P>
            <MediaBox>
              <IconWraper href={config.facebookURL} aria-label='Facebook'>
                <IconSvg name="facebook" />
              </IconWraper>
              <IconWraper href={config.instagramURL} aria-label='Instagram'>
                <IconSvg name="instagram" />
              </IconWraper>
            </MediaBox>
          </DataBox>
          <DataBox $order={[3, 2, 3]}>
            <H4>Polityka i regulamin:</H4>
            <P>
              <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
            </P>
            <P>
              <Link href="/regulamin">Regulamin</Link>
            </P>
            <P>
              <Link href="zasady-ochrony-danych-osobowych">Zasady ochrony danych</Link>
            </P>
            <P>
              <Link href="faq">FAQ</Link>
            </P>
          </DataBox>
        </DataWraper>
        <PrivacyPolicy>
          <DataBox>
            <P $textAlign="left">© 2025 ButleCO2.pl - Twój partner w dostawach CO2.</P>
            <P $textAlign="left">Wszystkie prawa zastrzeżone.</P>
          </DataBox>
          <DataBox>
            <P $textAlign="right">Projekt i realizacja strony: <Link href={config.createdByUrl}>Michał Murawski</Link></P>
          </DataBox>
        </PrivacyPolicy>
      </FooterConteiner>
    </FooterWraper>
  );
};

export default Footer;
