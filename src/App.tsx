import React from 'react';
import { About, Contact, Hero, Navbar, Orders, Services } from './sections';
import { AppWrapper, Main } from './App.styled';

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Main>
        <Hero />
        <About />
        <Services />
        <Orders />
      </Main>
      <Contact />
    </AppWrapper>
  );
};

export default App;
