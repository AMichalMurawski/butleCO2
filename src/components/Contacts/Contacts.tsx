import React from "react";
import { ContactsWraper, LinkWraper } from "./Contacts.styled";
import { IconSvg } from "../";
import { P } from "../../styles";


const Contacts: React.FC = () => {
    
    return (
        <ContactsWraper>
            <LinkWraper href="tel:(+48)500612755">
              <IconSvg name="phone" size='1rem' />
              <P>(+48) 500 612 755</P>
            </LinkWraper>
            <LinkWraper href="mailto:biuro@butleco2.pl">
              <IconSvg name="mail" size='1rem' />
              <P>biuro@butleco2.pl</P>
            </LinkWraper>
          </ContactsWraper>
    );
};

export default Contacts;