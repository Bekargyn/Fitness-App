import React from 'react';
import { Container, Card, ListGroup, Row, Col, Image } from 'react-bootstrap';



export default class MealList extends React.Component {



    render() {
        return (
            <div>
                {this.props.meals.map(meal =>
                    <Card>
                        <ListGroup varient="flush">
                            <ListGroup.Item>
                                <Container>
                                    <Row>
                                        <Col sm={4}>
                                            <Image src={meal.strMealThumb} thumbnail />

                                        </Col>
                                        <Col sm={8}>
                                            <Row><h5>{meal.strMeal}</h5></Row>
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