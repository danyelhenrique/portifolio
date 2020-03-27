import React from "react";
import { PersistGate } from "redux-persist/integration/react";

import { persistor } from "./store/store";

import { Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import history from "./services/history";

import GlobalStyle from "./global/styles";

import ToastContainer from "../src/components/Toasty";
import Route from "./routes";
import Nav from "../src/components/Nav";

function App() {
  return (
    <Router history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={600}
          placement="bottom-center"
          components={{ Toast: ToastContainer }}
        >
          <GlobalStyle />
          <Nav />
          <Route />
        </ToastProvider>
      </PersistGate>
    </Router>
  );
}

export default App;
