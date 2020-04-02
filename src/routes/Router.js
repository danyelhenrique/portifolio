import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default ({ isPrivate, children, ...rest }) => {
  const { token, isloggedin } = useSelector(state => state.session);

  if (!token && isPrivate) {
    return (
      <Route {...rest}>
        <Redirect to="/admin/session" />
        {children}
      </Route>
    );
  }

  if (!isloggedin && isPrivate) {
    return (
      <Route {...rest}>
        <Redirect to="/admin/session" />
        {children}
      </Route>
    );
  }

  return <Route {...rest}>{children}</Route>;
};
