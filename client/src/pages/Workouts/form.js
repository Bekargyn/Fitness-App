import React, {useEffect, useState} from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";
import axios from "axios";

export const Form = (props) => {

  const [formValues, setFormValues] = useState({
    name: "",
  });

  const [error, setError] = useState();


  const onChange = (e) => {
    formValues[e.target.name] = e.target.value;
    setFormValues(formValues);
  };

  const saveWorkout = () =>{
    if (!formValues.name) {setError("Please Fill Name First"); return 0;}
    axios({
      method: 'post',
      url: '/api/workouts',
      data: {
        name: formValues.name
      }
    }).then(data=>{
      if (!data.data.error){
        props.setCurrentPage(0);
      }else{
        setError(data.data.error);
      }
    });
  };




  return (
  <div className="form">
    <div className="header">
      <h1>
        Add Workouts
        <div onClick={()=>props.setCurrentPage(0)} className="btn btn-danger float-right">
          Cancel
        </div>
      </h1>
    </div>
    <div className="form-group">
      <label htmlFor="" className="form-label">Name</label>
      <input onChange={onChange} name="name" className="form-control"/>
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
      <div onClick={saveWorkout} className="btn btn-success">Create New</div>
    </div>
  </div>
)};
