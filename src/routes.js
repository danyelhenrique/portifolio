import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home/index";
import Admin from "./pages/Admin";

export default () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/admin">
      <Admin />
    </Route>
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
);
