import React, { useEffect, useState } from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";
import axios from "axios";

//List of workouts for user
export const List = () => {
  const [workoutList, setWorkoutList] = useState([]);

  useEffect(() => {
    axios.get("/api/workouts").then(data => {
      setWorkoutList(Array.isArray(data.data) ? data.data : []);
    });
  }, []);

  const showWorkout = el => {};

  return (
    <div className="workout-list">
      <Card>
        <ListGroup varient="flush">
          {workoutList.map(el => (
            <ListGroup.Item key={el.id} onClick={showWorkout}>
              <Container>
                <Row>
                  <Col sm={12}>
                    <Row>
                      <h5>{el.name}</h5>
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
