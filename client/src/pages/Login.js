import React, { useState, useContext } from "react";
import { Button, Form, Col, Accordion, Card } from "react-bootstrap";
import axios from "axios";
import { UserContext } from "../userContext";

export const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    weight: ""
  });

  const onChange = e => {
    formValues[e.target.name] = e.target.value;
    setFormValues(formValues);
  };

  const onSignUp = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: "/api/sign-up",
      data: {
        email: formValues.email,
        password: formValues.password,
        age: formValues.age,
        name: formValues.name,
        weight: formValues.weight
      }
    }).then(data => {
      if (!data.error) {
        setFormValues(data);
      }
    });
  };

  return (
    <div className="Whole-page">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Sign In
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div>
                <h1>Sign In</h1>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      onChange={onChange}
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onChange={onChange}
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Sign In
                  </Button>
                </Form>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Sign Up{" "}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div>
                <h1>Sign Up</h1>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        onChange={onChange}
                        name="email"
                        type="email"
                        placeholder="Email*"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={onChange}
                        name="password"
                        type="password"
                        placeholder="Password*"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      onChange={onChange}
                      name="name"
                      placeholder="Name*"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      onChange={onChange}
                      name="age"
                      placeholder="Age"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                      onChange={onChange}
                      name="weight"
                      placeholder="Weight"
                    />
                  </Form.Group>

                  <Form.Group id="formGridCheckbox"></Form.Group>

                  <Button variant="primary" type="submit" onClick={onSignUp}>
                    Sign Up
                  </Button>
                </Form>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
