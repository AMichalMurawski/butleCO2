import React from 'react';
import { Address, AddressLink, AddressWraper, ContactSection, ContactsWraper, FormWraper, Title, WorkHours, WorkHoursConteiner } from './ContactUs.styled';

const ContactUs: React.FC = () => {
  return <ContactSection>
    <Title>Masz pytania? Skontaktuj się z nami już dziś!</Title>
    <ContactsWraper>
      <AddressWraper>
        <Address>Zadzwoń: <AddressLink href='tel:+48500612755'>500-612-755</AddressLink> - odbieramy od poniedziałku do soboty</Address>
        <Address>Napisz: <AddressLink href='mailto:biuro@butleco2.pl'>biuro@butleco2.pl</AddressLink> - odpowiadamy w ciągu 24 godzin</Address>
        <Address>Odwiedź nas: ul. Poprawna 105A, 03-984 Warszawa.</Address>
      </AddressWraper>
      <WorkHoursConteiner>
        <WorkHours>Jesteśmy dla Ciebie: Pn-Pt 10:00-17:00, Sb 10:00-14:00.</WorkHours>
        <WorkHours>W pilnych sprawach dzwoń poza godzinami.</WorkHours>
        <WorkHours>Jeśli nie odbieramy - napisz SMS - postaramy się pomóc!</WorkHours>
      </WorkHoursConteiner>
    </ContactsWraper>
    <FormWraper>Form Wraper</FormWraper>
    </ContactSection>;
};

export default ContactUs;
