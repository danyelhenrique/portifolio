import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Toas from "../src/components/Toasty";

import GlobalStyle from "./global/styles";
import RootContext from "./context/root";

import Route from "./routes";

import Nav from "../src/components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={6000000}
          placement="bottom-center"
          components={{ Toast: Toas }}
        >
          <RootContext>
            <GlobalStyle />
            <Nav />
            <Route />
          </RootContext>
        </ToastProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
