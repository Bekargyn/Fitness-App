import React, { useEffect, useState } from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";
import axios from "axios";

//List of exer
export const Excercises = props => {
  const [workoutList, setWorkoutList] = useState([]);

  useEffect(() => {
    axios.get("/api/workout/" + props.id).then(data => {
      setWorkoutList(data.data);
    });
  }, []);

  return (
    <div className="excercises-list">
      {/*<Card>
      <ListGroup varient="flush">
        {workoutList.map( el =>
        <ListGroup.Item>
          <Container>
            <Row>
              <Col sm={12}>
                <Row>
                  <h5>{el.name}</h5>
                </Row>
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>)}
      </ListGroup>
    </Card>*/}
    </div>
  );
};
