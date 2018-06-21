import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      1 === 1 ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
export default ProtectedRoutes;
