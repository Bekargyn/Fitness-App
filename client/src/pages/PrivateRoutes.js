import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ isLoggedIn, ...props }) =>
  isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
