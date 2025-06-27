import React from 'react';
import { ContactSection, ContactsWraper, GridWraper, Iframe, InfoWraper } from './ContactUs.styled';
import { ContactForm } from '../../components';
import { H2, Link, P } from '../../styles';

const ContactUs: React.FC = () => {
  return (
    <ContactSection id="contactUs">
      <H2>Masz pytania? Skontaktuj się z nami już dziś!</H2>
      <ContactsWraper>
        <InfoWraper as="address" $gridColumn={1} $gridRow={1}>
          <P>
            Zadzwoń:{' '}
            <Link href="tel:+48500612755" $bold>
              500-612-755
            </Link>{' '}
          </P>
          <P $textAlign="right">odbieramy od poniedziałku do soboty</P>
          <P>
            Napisz:{' '}
            <Link href="mailto:biuro@butleco2.pl" $bold>
              biuro@butleco2.pl
            </Link>{' '}
          </P>
          <P $textAlign="right">odpowiadamy w ciągu 24 godzin</P>
          <P>Odwiedź nas:</P>
          <P $bold $textAlign="center">
            ul. Poprawna 105A,
          </P>
          <P $bold $textAlign="center">
            03-984 Warszawa
          </P>
        </InfoWraper>
        <InfoWraper $gridColumn={1} $gridRow={2}>
          <P>Jesteśmy dla Ciebie:</P>
          <P $bold $textAlign="center">
            Pn-Pt 10:00-17:00
          </P>
          <P $bold $textAlign="center">
            Sb 10:00-14:00
          </P>
          <P>W pilnych sprawach dzwoń poza godzinami.</P>
          <P>Jeśli nie odbieramy - napisz SMS - postaramy się pomóc!</P>
        </InfoWraper>
        <GridWraper $gridColumn={2} $gridRow="1 / 3">
          <ContactForm />
        </GridWraper>
        <GridWraper $gridColumn="1 / 3" $gridRow={3}>
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
