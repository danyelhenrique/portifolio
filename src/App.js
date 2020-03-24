import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./global/styles";
import RootContext from "./context/root";

import Route from "./routes";

import Nav from "../src/components/Nav";

function App() {
  return (
    <BrowserRouter>
      <RootContext>
        <GlobalStyle />
        <Nav />
        <Route />
      </RootContext>
    </BrowserRouter>
  );
}

export default App;
