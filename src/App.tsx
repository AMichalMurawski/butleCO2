import React from 'react';
import { About, ContactUs, Footer, Header, Hero, Orders, Services, WhyChooseUs } from './sections';
import { AppWrapper, Main } from './App.styled';

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <ContactUs />
        <Orders />
      </Main>
      <Footer />
    </AppWrapper>
  );
};

export default App;
