import React, { useEffect } from "react";
import { verifySessionRequest } from "../store/modules/Session/actions";

import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default ({ isPrivate, children, ...rest }) => {
  const { token, isloggedin } = useSelector((state) => state.session);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isPrivate) {
      dispatch(verifySessionRequest());
    }
  }, [isPrivate, dispatch]);

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
