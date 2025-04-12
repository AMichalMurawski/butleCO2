import React from 'react';
import { HeaderBox, HeaderWraper, LogoWraper, NavbarWraper } from './Header.styled';
import Button from '../../components/Button/Button';

const Header: React.FC = () => {
  return (
    <HeaderWraper>
      <HeaderBox>
        <LogoWraper>Logo</LogoWraper>
        <NavbarWraper>
          <Button type="button" text="O firmie" />
          <Button type="button" text="Kontakt" active />
          <Button type="button" text="Oferta" />
          <Button type="button" text="Zamówienia" />
        </NavbarWraper>
      </HeaderBox>
    </HeaderWraper>
  );
};

export default Header;
