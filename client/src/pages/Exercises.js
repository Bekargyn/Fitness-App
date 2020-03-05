import React from "react";
import {
  Nav,
  Container,
  Card,
  ListGroup,
  Row,
  Col,
  Image
} from "react-bootstrap";

export const Exercises = () => (
  <div className="Whole-page">
    <div className="header">
      <h1>Exercises</h1>
    </div>
    <div>
      <Nav variant="tabs" defaultActiveKey="link-arms">
        <Nav.Item>
          <Nav.Link eventKey="link-arms">Arms</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-legs">Legs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-abs">Abs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-chest">Chest</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-back">Back</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-shoulders">Shoulders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-calves">Calves</Nav.Link>
        </Nav.Item>
      </Nav>
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
                    <h5>Exercise Name</h5>
                  </Row>
                  <Row>
                    <h6>Exercise Equipment</h6>
                  </Row>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  </div>
);
