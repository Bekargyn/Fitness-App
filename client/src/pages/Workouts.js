import React from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";

export const Workouts = () => {

  return (
  <div class="Whole-page">
    {/* if signed in display this but if not display please sign in */}
    <div class="header">
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
)};
