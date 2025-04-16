import React from 'react';
import { About, ContactMe, Footer, Header, Hero, Orders, Services, WyChooseUs } from './sections';
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
        <ContactMe />
        <Orders />
      </Main>
      <Footer />
    </AppWrapper>
  );
};

export default App;
