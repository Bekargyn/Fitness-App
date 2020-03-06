import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import UserContext from "../store/store";
import axios from "axios";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = props => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    if (window.confirm("Are you sure you want to logout")) {
      axios.get("/api/logout").then(() => {
        setUser({
          name: "Guest",
          email: "",
          age: "",
          weight: "",
          loggedIn: false
        });
        history.push("/login");
      });
    } else {
    }
  };

  return (
  <Styles>
    <Navbar expand="lg">
      <Link to={"/"} className={"navbar-brand"}>FitnessHelper</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar.nav">
        <Nav className="ml-auto">
          {/* <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> */}
          <Nav.Item>
            <Link to={"/workouts"} className={"nav-link"}>Workouts</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/exercises"} className={"nav-link"}>Exercises</Link>
           {/* <Nav.Link href="/exercises">Exercises</Nav.Link>*/}
          </Nav.Item>
          <Nav.Item>
            <Link to={"/nutrition"} className={"nav-link"}>Nutrition</Link>
          </Nav.Item>
          {user.loggedIn?
            <Nav.Item>
              <Link to={"/exercises"} className={"nav-link"}>
                Exercises
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={"/nutrition"} className={"nav-link"}>
                Nutrition
              </Link>
            </Nav.Item>
            {user.loggedIn ? (
              <Nav.Item>
                <Nav.Link onClick={logout}>{user.name}</Nav.Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Link to={"/login"} className={"nav-link"}>
                  Login
                </Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
