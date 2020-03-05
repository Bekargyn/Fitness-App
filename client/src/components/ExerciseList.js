import React from 'react';
import { Container, Card, ListGroup, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

export default class ExerciseList extends React.Component {
  state = {
    exercises: [],
    arms: [],
    legs:[],
    abs:[],
    back:[],
    chest:[],
    shoulders:[],
    calves:[]
  }

  componentDidMount() {
    // console.log(this.props)
    axios.get('https://wger.de/api/v2/exercise/?limit=700')
    .then(res => {
      let letallUsers = [];
      for (let i = 0; i < res.data.results.length; i++){
                const singleEntry = {}
                let exercises = res.data.results[i].exercises
                let exercisesName = res.data.results[i].name
                let exercisesEquipment = res.data.results[i].equipment
                singleEntry.category = exercises;
                singleEntry.name = exercisesName;
                singleEntry.equipment = exercisesEquipment;

                letallUsers.push(singleEntry)
      
              }
              
              this.setState({ exercises: letallUsers });
            })
  }
  //   state = {
  //   name: [],
  //   arms: [],
  //   legs:[],
  //   abs:[],
  //   back:[],
  //   chest:[],
  //   shoulders:[],
  //   calves:[]
  // }

  // componentDidMount() {
  //   axios.get(`https://wger.de/api/v2/exercisecategory/`)
  //     .then(res => {
  //       let allUsers = [];
  //       for (let i = 0; i < res.data.results.length; i++){
  //         let name = res.data.results[i].name
  //         allUsers.push(name)

  //       }
        
  //       this.setState({ name: allUsers });
  //     })

  //     // Arms

  //     axios.get('https://wger.de/api/v2/exercise/?limit=700&category=8')
  //     .then(res =>{
  //       let letallUsers = [];
  //       for (let i = 0; i < res.data.results.length; i++){
  //         const singleEntry = {}
  //         let arms = res.data.results[i].category
  //         let armsName = res.data.results[i].name
  //         let armsEquipment = res.data.results[i].equipment
  //         singleEntry.category = arms;
  //         singleEntry.name = armsName;
  //         singleEntry.equipment = armsEquipment;

  //         letallUsers.push(singleEntry);
  //       }

  //       this.setState({ arms: letallUsers });

  //       console.log(this.state.arms);

  //     }) 

  //      // Abs

  //     axios.get('https://wger.de/api/v2/exercise/?limit=700&category=10')
  //     .then(res =>{
  //       let letallUsers = [];
  //       for (let i = 0; i < res.data.results.length; i++){
  //         const singleEntry = {}
  //         let abs = res.data.results[i].abs
  //         let absName = res.data.results[i].name
  //         let absEquipment = res.data.results[i].equipment
  //         letallUsers.push(singleEntry)
  //         singleEntry.category = abs;
  //         singleEntry.name = absName;
  //         singleEntry.equipment = absEquipment;
  //       }

  //       this.setState({ abs: letallUsers });

  //     })

  //      // Back

  //     axios.get('https://wger.de/api/v2/exercise/?limit=700&category=12')
  //     .then(res =>{
  //       let letallUsers = [];
  //       for (let i = 0; i < res.data.results.length; i++){
  //         const singleEntry = {}
  //         let back = res.data.results[i].back
  //         let backName = res.data.results[i].name
  //         let backEquipment = res.data.results[i].equipment
  //         letallUsers.push(singleEntry)
  //         singleEntry.category = back;
  //         singleEntry.name = backName;
  //         singleEntry.equipment = backEquipment;
  //       }

  //       this.setState({ back: letallUsers });

  //     })

  //      // Calves

  //     axios.get('https://wger.de/api/v2/exercise/?limit=700&category=14')
  //     .then(res =>{
  //       let letallUsers = [];
  //       for (let i = 0; i < res.data.results.length; i++){
  //         const singleEntry = {}
  //         let calves = res.data.results[i].calves
  //         let calvesName = res.data.results[i].name
  //         let calvesEquipment = res.data.results[i].equipment
  //         letallUsers.push(singleEntry)
  //         singleEntry.category = calves;
  //         singleEntry.name = calvesName;
  //         singleEntry.equipment = calvesEquipment;
  //       }

  //       this.setState({ calves: letallUsers });

  //     })

  //      // Chest

  //     axios.get('https://wger.de/api/v2/exercise/?limit=700&category=11')
  //     .then(res =>{
  //       let letallUsers = [];
  //       for (let i = 0; i < res.data.results.length; i++){
  //         const singleEntry = {}
  //         let chest = res.data.results[i].chest
  //         let chestName = res.data.results[i].name
  //         let chestEquipment = res.data.results[i].equipment
  //         letallUsers.push(singleEntry)
  //         singleEntry.category = chest;
  //         singleEntry.name = chestName;
  //         singleEntry.equipment = chestEquipment;
  //       }

  //       this.setState({ chest: letallUsers });

  //     })

       // Legs

    //    functions Legs() {
    //      const [exerciseState]
    //   axios.get('https://wger.de/api/v2/exercise/?limit=700&category=9')
    //   .then(res =>{
    //     let letallUsers = [];
    //     for (let i = 0; i < res.data.results.length; i++){
    //       const singleEntry = {}
    //       let legs = res.data.results[i].legs
    //       let legsName = res.data.results[i].name
    //       let legsEquipment = res.data.results[i].equipment
    //       letallUsers.push(singleEntry)
    //       singleEntry.category = legs;
    //       singleEntry.name = legsName;
    //       singleEntry.equipment = legsEquipment;
    //     }

    //     this.setState({ legs: letallUsers });

    //   })
    // }

  //      // Shoulders

  //     axios.get('https://wger.de/api/v2/exercise/?limit=700&category=13')
  //     .then(res =>{
  //       let letallUsers = [];
  //       for (let i = 0; i < res.data.results.length; i++){
  //         const singleEntry = {}
  //         let shoulders = res.data.results[i].shoulders
  //         let shouldersName = res.data.results[i].name
  //         let shouldersEquipment = res.data.results[i].equipment
  //         letallUsers.push(singleEntry)
  //         singleEntry.category = shoulders;
  //         singleEntry.name = shouldersName;
  //         singleEntry.equipment = shouldersEquipment;
  //       }

  //       this.setState({ shoulders: letallUsers });

  //     })

  //   }

      
  

  

  render() {
    // console.log(this.state.name);
    return (
<div>
{ this.state.exercises.map(exercise => 
        <Card>
<ListGroup varient="flush">
    <ListGroup.Item>
        <Container>
            <Row>
                <Col sm={4}>
                <Image src="holder.js/171x180" thumbnail />

                </Col>
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