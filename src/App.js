import React from "react";
import Main from "../src/components/Main";
import Hero from "../src/components/Hero";
import Nav from "../src/components/Nav";

import "../src/assets/css/font-awesome.min.css";
import "./reset.css";

function App() {
  return (
    <Main>
      <Hero />
      <Nav />
    </Main>
  );
}

export default App;
