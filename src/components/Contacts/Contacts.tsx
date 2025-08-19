import React from 'react';
import { ContactsWraper, LinkWraper } from './Contacts.styled';
import { IconSvg } from '../';
import { P } from '../../styles';
import { useConfig } from '../../context/Config/ConfigContext';

const Contacts: React.FC = () => {
  const config = useConfig();

  return (
    <ContactsWraper>
      <LinkWraper href={`tel:${config.phone[0][0]}`}>
        <IconSvg name="phone" size="1rem" />
        <P>{config.phone[0][1]}</P>
      </LinkWraper>
      <LinkWraper href={`mailto:${config.email}`}>
        <IconSvg name="mail" size="1rem" />
        <P>{config.email}</P>
      </LinkWraper>
    </ContactsWraper>
  );
};

export default Contacts;
