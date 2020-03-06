import React from 'react';
import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap';

export default class ExerciseList extends React.Component {







  render() {
    // console.log(this.state.name);
    return (
      <div>
        {this.props.exercises.map(exercise =>
          <Card>
            <ListGroup varient="flush">
              <ListGroup.Item>
                <Container>
                  <Row>
                   
                    <Col sm={8}>
                      <Row><h5>{exercise.name}</h5></Row>
                      {/* <Row><h6>{exercise.category}</h6></Row> */}
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            </ListGroup>
          </Card>

        )}
      </div>

    )



  }
}