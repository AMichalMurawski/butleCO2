import React from 'react';
import { About, ContactUs, Footer, Header, Hero, Orders, Services, WyChooseUs } from './sections';
import { AppWrapper, Main } from './App.styled';

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <Hero />
        <About />
        <Services />
        <WyChooseUs />
        <ContactUs />
        <Orders />
      </Main>
      <Footer />
    </AppWrapper>
  );
};

export default App;
