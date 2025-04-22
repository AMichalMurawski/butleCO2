import React from 'react';
import { HeaderBox, HeaderWraper, LogoWraper, NavbarWraper } from './Header.styled';
import Button from '../../components/Button/Button';

const navbarList = [
  ["O firmie", "about"],
  ["Dlaczego My?", "whyChooseUs"],
  ["Kontakt", "contactUs"],
  ["Oferta", "services"],
  ["Zamówienia", "orders"]
]

const Header: React.FC = () => {
  return (
    <HeaderWraper>
      <HeaderBox>
        <LogoWraper>Logo</LogoWraper>
        <NavbarWraper>
          {navbarList.map(option => <Button key={option[1]} type="button" text={option[0]} idSection={option[1]} />)}
        </NavbarWraper>
      </HeaderBox>
    </HeaderWraper>
  );
};

export default Header;
