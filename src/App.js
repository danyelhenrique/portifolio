import React, { useEffect } from "react";

import api from "./services/api";

import { useDispatch } from "react-redux";
import { projectsRequest } from "./store/modules/Project/actions";

import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import GlobalStyle from "./global/styles";

import ToastContainer from "../src/components/Toasty";
import Route from "./routes";
import Nav from "../src/components/Nav";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function handleProject() {
      const response = await api.get("/users/projects");
      const payload = { ...response.data, isLoading: false };

      dispatch(projectsRequest(payload));
    }
    handleProject();
  }, []);

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
