import React, { useEffect, useState } from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";
import axios from "axios";

//List of exer
export const AddExercise = props => {

  const [formValues, setFormValues] = useState({});

  const [error, setError] = useState();
  const [category, setCategory] = useState("");
  const [exercises, setExercises] = useState();


  const onChange = (e) => {
    formValues[e.target.name] = e.target.value;
    setFormValues(formValues);
  };

  const getListOfEx = (e) => {
    if(!e.target.value) { setExercises([]); return;}
    axios({
      method: 'post',
      url: '/api/search-exercise/',
      data: {
        category: e.target.value
      }
    }).then(data=>{
      setExercises(data.data)
    });
  };

  const saveExercise = () =>{
    const data = {};
    axios({
      method: 'post',
      url: '/api/exercise-workouts',
      data: {
        ...formValues,
        WorkoutId: props.currentWorkout.id
      }
    }).then(data=>{
      if (!data.data.error){
        props.setCurrentPage("signle-workout");
      }else{
        setError(data.data.error);
      }
    });
  };

  useEffect(() => {
    axios.get("/api/exercise-category").then(data => {
      setCategory(Array.isArray(data.data) ? data.data : []);
    });
  }, []);


  return (
    <div className="form">
      <div className="header">
        <h1>
          Add Exercises
          <div onClick={()=>props.setCurrentPage("signle-workout")} className="btn btn-danger float-right">
            Cancel
          </div>
        </h1>
      </div>
      {category &&
        <div className="form-group">
          <label htmlFor="" className="form-label">Category</label>
          <select className="form-control" onChange={getListOfEx}>
            <option value="">Select Category</option>
            {category.map(el=><option key={el.DISTINCT} value={el.DISTINCT}>{el.DISTINCT}</option>)}
          </select>
        </div>
      }
      {exercises &&
        <div>
          <div className="form-group">
            <label htmlFor="" className="form-label">Exercise</label>
            <select className="form-control" name="ExerciseId" onChange={onChange}>
              <option value="">Select Exercise</option>
              {exercises.map(el=><option key={el.id} value={el.id}>{el.name}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">Repeats</label>
            <input onChange={onChange} name="repeats" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">Sets</label>
            <input onChange={onChange} name="sets" className="form-control"/>
          </div>
          {error &&
          <div className="row">
            <div className="col-12">
              <div className="alert alert-danger">
                {error}
              </div>
            </div>
          </div>
          }
          <div className="form-group">
            <div onClick={saveExercise} className="btn btn-success">Create New</div>
          </div>
        </div>
      }
    </div>
  );
};
