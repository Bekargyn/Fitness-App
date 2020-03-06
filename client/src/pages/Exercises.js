import React, { useState, useEffect } from "react";
import {
  Nav,
} from "react-bootstrap";
import axios from 'axios';
import ExerciseList from '../components/ExerciseList'


export function Exercises() {
  const [exercisesState, setExercisesState] = useState([]);
  const [category, setCategory] = useState(8);
  useEffect(() => {
  
      axios.get(`https://wger.de/api/v2/exercise/?category=${category}&limit=700`)
  .then(res => {
    console.log(res)
      setExercisesState(res.data.results);
      });
  }, [category]);




  return (
      <div class="Whole-page">
          <div class="header">
              <h1>Exercises</h1>
          </div>
          <div>
              <Nav variant="tabs" defaultActiveKey="link-arms">
                  <Nav.Item>
                      <Nav.Link eventKey="link-arms" onClick={() => setCategory(8)}>Arms</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-legs" onClick={() => setCategory(9)}>Legs</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-abs" onClick={() => setCategory(10)}>Abs</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-chest" onClick={() => setCategory(11)}>Chest</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-back" onClick={() => setCategory(12)}>Back</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-shoulders" onClick={() => setCategory(13)}>Shoulders</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-calves" onClick={() => setCategory(14)}>Calves</Nav.Link>
                  </Nav.Item>

              </Nav>
              <ExerciseList exercises={exercisesState}/>

          </div>

      </div>
  )
}

export default Exercises;


