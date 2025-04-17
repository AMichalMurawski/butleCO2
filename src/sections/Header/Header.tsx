import React from 'react';
import { HeaderBox, HeaderWraper, LogoWraper, NavbarWraper } from './Header.styled';
import Button from '../../components/Button/Button';

const Header: React.FC = () => {
  return (
    <HeaderWraper>
      <HeaderBox>
        <LogoWraper>Logo</LogoWraper>
        <NavbarWraper>
          <Button type="button" text="O firmie" idSection="about" />
          <Button type="button" text="Dlaczego My?" idSection="whyChooseUs" />
          <Button type="button" text="Kontakt" idSection="contactMe" active />
          <Button type="button" text="Oferta" idSection="services" />
          <Button type="button" text="Zamówienia" idSection="orders" />
        </NavbarWraper>
      </HeaderBox>
    </HeaderWraper>
  );
};

export default Header;
