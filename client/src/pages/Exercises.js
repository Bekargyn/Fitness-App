import React, { useState, useEffect } from "react";
import {
  Nav,
  Container,
  Card,
  ListGroup,
  Row,
  Col,
  Image
} from "react-bootstrap";
import axios from 'axios';
import ExerciseList from '../components/ExerciseList'


export function Exercises() {
  const [exercisesState, setExercisesState] = useState([]);
  const [category, setCategory] = useState(8);
  useEffect(() => {
      // For demonstration purposes, we mock an API call.
      axios.get('https://wger.de/api/v2/exercise/?limit=700')
  .then(res => {
      setExercisesState(res.data.results);
      });
  //   }, []);
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
              <ExerciseList />

          </div>

      </div>
  )
}

export default Exercises;

// export const Exercises = () => (
//   <div className="Whole-page">
//     <div className="header">
//       <h1>Exercises</h1>
//     </div>
//     <div>
//       <Nav variant="tabs" defaultActiveKey="link-arms">
//         <Nav.Item>
//           <Nav.Link eventKey="link-arms">Arms</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-legs">Legs</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-abs">Abs</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-chest">Chest</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-back">Back</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-shoulders">Shoulders</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-calves">Calves</Nav.Link>
//         </Nav.Item>
//       </Nav>
//       <Card>
//         <ListGroup varient="flush">
//           <ListGroup.Item>
//             <Container>
//               <Row>
//                 <Col sm={4}>
//                   <Image src="holder.js/171x180" thumbnail />
//                 </Col>
//                 <Col sm={8}>
//                   <Row>
//                     <h5>Exercise Name</h5>
//                   </Row>
//                   <Row>
//                     <h6>Exercise Equipment</h6>
//                   </Row>
//                 </Col>
//               </Row>
//             </Container>
//           </ListGroup.Item>
//         </ListGroup>
//       </Card>
//     </div>
//   </div>
// );
