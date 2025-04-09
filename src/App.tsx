import React from "react";
import { Contact, Hero, Home, Navbar, Orders, Services } from "./sections";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <Services />
      <Orders />
      <Contact />
    </>
  );
};

export default App;
