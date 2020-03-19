import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./global/styles";

import Route from "./routes";

import Nav from "../src/components/Nav";

import "../src/assets/css/font-awesome.min.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Route />
    </BrowserRouter>
  );
}

export default App;
