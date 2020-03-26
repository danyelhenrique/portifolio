import React from "react";

import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import GlobalStyle from "./global/styles";

import ToastContainer from "../src/components/Toasty";
import Route from "./routes";
import Nav from "../src/components/Nav";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
