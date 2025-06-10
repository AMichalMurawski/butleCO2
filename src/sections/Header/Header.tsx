import React from 'react';
import {
  ContactsWraper,
  HeaderBox,
  HeaderWraper,
  IconWraper,
  Link,
  LinkText,
  LogoWraper,
  NavbarWraper,
} from './Header.styled';
import { Button, IconSvg, LogoIcon } from '../../components';
import { useIdSection } from '../../context/Section/IdSectionContext';

const navbarList = [
  ['O firmie', '/#about'],
  ['Dlaczego My?', '/#whyChooseUs'],
  ['Kontakt', '/#contactUs'],
  ['Oferta', '/#services'],
  ['Zamówienia', '/orders'],
  ['Template', '/template'],
];

const Header: React.FC = () => {
  const { activeIdSection, scrollToSection } = useIdSection();

  return (
    <HeaderWraper>
      <HeaderBox>
        <LogoWraper>
          <LogoIcon dimension="100%" />
        </LogoWraper>
        <NavbarWraper>
          {navbarList.map(option => (
            <Button
              key={option[1]}
              type="button"
              text={option[0]}
              idSection={option[1]}
              active={activeIdSection === option[1]}
              onClick={() => scrollToSection(option[1])}
            />
          ))}
        </NavbarWraper>
        <ContactsWraper>
          <Link href="tel:(+48)500612755">
            <IconWraper>
              <IconSvg name="phone" />
            </IconWraper>
            <LinkText>(+48) 500 612 755</LinkText>
          </Link>
          <Link href="mailto:biuro@butleco2.pl">
            <IconWraper>
              <IconSvg name="mail" />
            </IconWraper>
            <LinkText>biuro@butleco2.pl</LinkText>
          </Link>
        </ContactsWraper>
      </HeaderBox>
    </HeaderWraper>
  );
};

export default Header;
