import React, {useEffect, useState} from "react";
import {Container, Card, ListGroup, Row, Col, Image} from "react-bootstrap";
import axios from "axios";

//List of workouts for user
export const List = (props) => {
    const [workoutList, setWorkoutList] = useState([]);

    const getWorkoutList = () => {
        axios.get("/api/workouts").then(data => {
            setWorkoutList(Array.isArray(data.data) ? data.data : []);
        });
    };

    useEffect(() => {getWorkoutList()}, []);


    const removeWorkout = (id) => {
        if (!window.confirm("Are you sure you want to delete it?")) return 0;
        axios({
                    method: 'post',
                    url: '/api/workouts/delete',
                    data: {
                        id: id
                    }
                }
        ).then(()=>{getWorkoutList()});
    }


    return (
            <div className="workout-list">
                <div className="header">
                    <h1>
                        Workouts
                        <button onClick={() => props.setCurrentPage("add-workouts")} className="btn btn-success float-right">
                            Add
                        </button>
                    </h1>
                </div>
                <Card>
                    <ListGroup varient="flush">
                        {workoutList.map(el => (
                                <ListGroup.Item key={el.id} onClick={() => {
                                    props.setCurrentWorkout(el);
                                    props.setCurrentPage("signle-workout")
                                }}>
                                    <Container>
                                        <Row>
                                            <Col sm={12} style={{"cursor":"pointer"}}>
                                                <h5>{el.name}
                                                    <button className="btn btn-danger float-right" onClick={(e) =>{ e.stopPropagation(); removeWorkout(el.id)}}>X</button>
                                                </h5>
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
