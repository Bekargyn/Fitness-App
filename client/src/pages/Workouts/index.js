import React, { useEffect, useState } from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { List } from "./list";
import { Form } from "./form";

export const Workouts = () => {
  const [showForm, setShowForm] = useState(0);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="Whole-page">
      <div className="header">
        <h1>
          Workouts{" "}
          <div onClick={toggleForm} className="btn btn-success float-right">
            Add
          </div>
        </h1>
      </div>
      {!showForm ? <List /> : <Form setShowForm={setShowForm} />}
    </div>
  );
};
