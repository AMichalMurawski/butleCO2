import React from 'react';
import {
  ContactsWraper,
  HeaderBox,
  HeaderWraper,
  LinkWraper,
  LogoWraper,
  NavbarWraper,
} from './Header.styled';
import { Button, IconSvg, LogoIcon } from '../../components';
import { useIdSection } from '../../context/Section/IdSectionContext';
import { P } from '../../styles';

const navbarList = [
  ['O firmie', '/#about'],
  ['Dlaczego My?', '/#whyChooseUs'],
  ['Kontakt', '/#contactUs'],
  ['Oferta', '/#services'],
  ['Zamówienia', '/orders#orders'],
];

const Header: React.FC = () => {
  const { activeIdSection, scrollToSection } = useIdSection();

  return (
    <HeaderWraper>
      <HeaderBox>
        <LogoWraper onClick={() => scrollToSection('/#hero')}>
          <LogoIcon dimension="3.5rem" />
        </LogoWraper>
        <NavbarWraper>
          {navbarList.map(option => (
            <Button
              key={option[1]}
              type="button"
              text={option[0]}
              active={activeIdSection === option[1]}
              onClick={() => scrollToSection(option[1])}
            />
          ))}
        </NavbarWraper>
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
      </HeaderBox>
    </HeaderWraper>
  );
};

export default Header;
