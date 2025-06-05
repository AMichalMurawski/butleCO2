import React from 'react';
import {
  Address,
  AddressLink,
  AddressWraper,
  ContactSection,
  ContactsWraper,
  FormWraper,
  Iframe,
  MapWraper,
  Title,
  WorkHours,
  WorkHoursConteiner,
} from './ContactUs.styled';
import { ContactForm } from '../../components';

const ContactUs: React.FC = () => {
  return (
    <ContactSection id="contactUs">
      <Title>Masz pytania? Skontaktuj się z nami już dziś!</Title>
      <ContactsWraper>
        <AddressWraper>
          <Address>
            Zadzwoń: <AddressLink href="tel:+48500612755">500-612-755</AddressLink> - odbieramy od
            poniedziałku do soboty
          </Address>
          <Address>
            Napisz: <AddressLink href="mailto:biuro@butleco2.pl">biuro@butleco2.pl</AddressLink> -
            odpowiadamy w ciągu 24 godzin
          </Address>
          <Address>
            Odwiedź nas: <AddressLink>ul. Poprawna 105A, 03-984 Warszawa</AddressLink>
          </Address>
        </AddressWraper>
        <WorkHoursConteiner>
          <WorkHours>
            Jesteśmy dla Ciebie: <b>Pn-Pt 10:00-17:00</b>, <b>Sb 10:00-14:00</b>
          </WorkHours>
          <WorkHours>W pilnych sprawach dzwoń poza godzinami.</WorkHours>
          <WorkHours>Jeśli nie odbieramy - napisz SMS - postaramy się pomóc!</WorkHours>
        </WorkHoursConteiner>
        <FormWraper>
          <ContactForm />
        </FormWraper>
        <MapWraper>
          <Iframe
            title="Butle CO2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19554.19845238885!2d21.077402827548898!3d52.220224928548824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed27e39e360c5%3A0x13d6249242820798!2sBUTLECO2.PL!5e0!3m2!1spl!2spl!4v1744833007109!5m2!1spl!2spl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapWraper>
      </ContactsWraper>
    </ContactSection>
  );
};

export default ContactUs;
