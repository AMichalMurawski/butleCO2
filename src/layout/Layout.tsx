import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../sections';
import { LayoutWrapper, Main } from './Layout.styled';
import { ModalNavbar, Toast } from '../components';
import { GlobalStyle } from '../styles';

const Layout: React.FC = () => {
  const [hamburger, setHamburger] = useState<boolean>(false);

  return (
    <LayoutWrapper>
      <GlobalStyle />
      <Header onClick={() => setHamburger(!hamburger)} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <Toast />
      <ModalNavbar visible={hamburger} onClick={() => setHamburger(!hamburger)} />
    </LayoutWrapper>
  );
};

export default Layout;