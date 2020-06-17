import React from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";

const ExerciseList = (props) => {
  return (
    <div>
      <Card>
        <ListGroup varient="flush">
          {props.exercises.map((el) => (
            <ListGroup.Item>
              <Container>
                <Row>
                  <Col sm={12}>
                    <Row>
                      <h5>{el.name}</h5>
                    </Row>
                    <Row>
                      <h6>{el.equipment}</h6>
                    </Row>
                    <Row>
                      <p>{el.description}</p>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default ExerciseList;
