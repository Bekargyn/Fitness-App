import React from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ isLoggedIn, ...props }) =>
  isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
