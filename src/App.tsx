import React from 'react';
import { About, ContactUs, Footer, Header, Hero, Orders, Services, WhyChooseUs } from './sections';
import { AppWrapper, Main } from './App.styled';
import GoogleReviews from './sections/GoogleReviews/GoogleReviews';

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
        <GoogleReviews />
        <Orders />
      </Main>
      <Footer />
    </AppWrapper>
  );
};

export default App;
