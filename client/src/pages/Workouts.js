import React, { useState, useContext } from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";
import { UserContext } from "../userContext";
import axios from "axios";

export const Workouts = () => {
  const [user, setUser] = useContext(UserContext);

  const [formValues, setFormValues] = useState({
    body: "",
    date: ""
  });

  const addWorkouts = e => {
    e.preventDefault();
    axios({
      methot: "post",
      url: "/api/workouts",
      data: {
        body: formValues.body,
        date: formValues.date
      }
    }).then(data => {
      console.log(data);
    });
  };

  return (
    <div className="Whole-page">
      {/* if signed in display this but if not display please sign in */}
      <div className="header">
        <h1>Workouts</h1>
      </div>
      <Card>
        <ListGroup varient="flush">
          <ListGroup.Item>
            <Container>
              <Row>
                <Col sm={4}>
                  <Image src="holder.js/171x180" thumbnail />
                </Col>
                <Col sm={8}>
                  <Row>
                    <h5>Workout #1 Name</h5>
                  </Row>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
          <ListGroup.Item>
            <Container>
              <Row>
                <Col sm={4}>
                  <Image src="holder.js/171x180" thumbnail />
                </Col>
                <Col sm={8}>
                  <Row>
                    <h5>Workout #2 Name</h5>
                  </Row>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
          <ListGroup.Item>
            <Container>
              <Row>
                <Col sm={4}>
                  <Image src="holder.js/171x180" thumbnail />
                </Col>
                <Col sm={8}>
                  <Row>
                    <h5>Workout #3 Name</h5>
                  </Row>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};
