import React from 'react';
import {
  ContactSection,
  ContactsWraper,
  GridWraper,
  Iframe,
  InfoBox,
  InfoWraper,
} from './ContactUs.styled';
import { ContactForm } from '../../components';
import { H2, Link, P } from '../../styles';
import { useConfig } from '../../context/Config/ConfigContext';

const ContactUs: React.FC = () => {
  const config = useConfig();

  return (
    <ContactSection id="contactUs">
      <H2>Masz pytania? Skontaktuj się z nami już dziś!</H2>
      <ContactsWraper>
        <InfoWraper as="address" $gridColumn={[1, 1]} $gridRow={[1, 1]}>
          <InfoBox>
            <P>
              Zadzwoń:{' '}
              <Link href={`tel:${config.phone[0][0]}`} $bold>
                {config.phone[0][1]}
              </Link>{' '}
            </P>
            <P $textAlign="right">odbieramy od poniedziałku do soboty</P>
          </InfoBox>
          <InfoBox>
            <P>
              Napisz:{' '}
              <Link href={`mailto:${config.email}`} $bold>
                {config.email}
              </Link>{' '}
            </P>
            <P $textAlign="right">odpowiadamy w ciągu 24 godzin</P>
          </InfoBox>
          <InfoBox>
            <P>Odwiedź nas:</P>
            <P $bold $textAlign="center">
              ul. {config.street} {config.nr},
            </P>
            <P $bold $textAlign="center">
              {config.postalCode} {config.city}
            </P>
          </InfoBox>
        </InfoWraper>
        <InfoWraper $gridColumn={[1, 1]} $gridRow={[2, 2]}>
          <InfoBox>
            <P>Jesteśmy dla Ciebie:</P>
            {config.openHours.map(hours => (
              <P $bold $textAlign="center">
                {hours}
              </P>
            ))}
          </InfoBox>
          <InfoBox>
            <P>W pilnych sprawach dzwoń poza godzinami.</P>
            <P>Jeśli nie odbieramy - napisz SMS - postaramy się pomóc!</P>
          </InfoBox>
        </InfoWraper>
        <GridWraper $gridColumn={[1, 2]} $gridRow={[3, '1 / 3']}>
          <ContactForm />
        </GridWraper>
        <GridWraper $gridColumn={[1, '1 / 3']} $gridRow={[4, 3]}>
          <Iframe
            title="Butle CO2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19554.19845238885!2d21.077402827548898!3d52.220224928548824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed27e39e360c5%3A0x13d6249242820798!2sBUTLECO2.PL!5e0!3m2!1spl!2spl!4v1744833007109!5m2!1spl!2spl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </GridWraper>
      </ContactsWraper>
    </ContactSection>
  );
};

export default ContactUs;
