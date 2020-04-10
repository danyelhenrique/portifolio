import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";

import { Router } from "react-router-dom";

import history from "./services/history";

import GlobalStyle from "./global/styles";

import Route from "./routes";
import Nav from "../src/components/Nav";

function App() {
  return (
    <Router history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Nav />
        <Route />
      </PersistGate>
    </Router>
  );
}

export default App;
