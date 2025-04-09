import React from "react";
import { Contact, Hero, Navbar, Orders, Services } from "./sections";
import { AppWrapper, Main } from "./App.styled";

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Main>
        <Hero />
        <Services />
        <Orders />
      </Main>
      <Contact />
    </AppWrapper>
  );
};

export default App;
