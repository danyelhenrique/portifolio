import React from "react";
import Nav from "../src/components/Nav";
import Main from "../src/components/Main";

import Home from "./pages/Home";
import Admin from "./pages/Admin";

import "../src/assets/css/font-awesome.min.css";
import "./reset.css";

function App() {
  return (
    <Main>
      <Nav />
      <Admin />
    </Main>
  );
}

export default App;
