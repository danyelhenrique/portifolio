import React from "react";
import { useSelector } from "react-redux";
import { Switch, Redirect } from "react-router-dom";

import Route from "./Router";

import Home from "../pages/Home/index";
import Admin from "../pages/Admin";
import Session from "../pages/Session";

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/admin" isPrivate>
        <Admin />
      </Route>
      <Route path="/admin/session">
        <Session />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
