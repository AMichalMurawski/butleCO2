import React from 'react';
import { About, ContactMe, Footer, Header, Hero, Orders, Products, Services } from './sections';
import { AppWrapper, Main } from './App.styled';

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <Hero />
        <About />
        <Services />
        <ContactMe />
        <Products />
        <Orders />
      </Main>
      <Footer />
    </AppWrapper>
  );
};

export default App;
