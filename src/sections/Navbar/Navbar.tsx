import React from 'react';
import { Header, HeaderBox, LogoWraper, NavbarWraper } from './Navbar.styled';
import Button from '../../components/Button/Button';

const Navbar: React.FC = () => {
  return (
    <Header>
      <HeaderBox>
        <LogoWraper>Logo</LogoWraper>
        <NavbarWraper>
          <Button type="button" text="O firmie" />
          <Button type="button" text="Kontakt" />
          <Button type="button" text="Oferta" />
          <Button type="button" text="Zamówienia" />
        </NavbarWraper>
      </HeaderBox>
    </Header>
  );
};

export default Navbar;
