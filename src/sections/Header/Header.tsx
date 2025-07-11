import React from 'react';
import {
  HamburgerLine,
  HamburgerWraper,
  HeaderBox,
  HeaderWraper,
  LogoWraper,
  NavbarConteiner,
} from './Header.styled';
import { Contacts, LogoIcon, Navbar } from '../../components';
import { useIdSection } from '../../context/Section/IdSectionContext';

interface HeaderProps {
  onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({onClick}) => {
  const { scrollToSection } = useIdSection();

  return (
    <>
      <HeaderWraper>
        <HeaderBox>
          <LogoWraper onClick={() => scrollToSection('/#hero')}>
            <LogoIcon dimension="3.5rem" />
          </LogoWraper>
          <NavbarConteiner>
            <Navbar flexDirection='row' />
          </NavbarConteiner>
          <Contacts />
          <HamburgerWraper onClick={onClick}>
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
          </HamburgerWraper>
        </HeaderBox>
      </HeaderWraper>
    </>
  );
};

export default Header;
