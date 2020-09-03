import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import axios from "axios";
import ExerciseList from "../components/ExerciseList";

export function Exercises() {
  const [exercises, setExercises] = useState();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get("/api/exercise-category").then((data) => {
      setCategory(Array.isArray(data.data) ? data.data : []);
      if (data.data) {
        getListOfEx(data.data[0].DISTINCT);
      }
    });
  }, []);

  const getListOfEx = (val) => {
    if (!val) {
      setExercises([]);
      return;
    }
    axios({
      method: "post",
      url: "/api/search-exercise/",
      data: {
        category: val,
      },
    }).then((data) => {
      setExercises(data.data);
    });
  };

  return (
    <div className="Whole-page">
      <div className="header">
        <h1>Exercises</h1>
      </div>
      {category && category.length && (
        <div>
          <Nav variant="tabs" defaultActiveKey={category[0].DISTINCT}>
            {category.map((el) => (
              <Nav.Item>
                <Nav.Link
                  key={el.DISTINCT}
                  eventKey={el.DISTINCT}
                  onClick={() => getListOfEx(el.DISTINCT)}
                >
                  {el.DISTINCT}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          {exercises && <ExerciseList exercises={exercises} />}
        </div>
      )}
    </div>
  );
}

export default Exercises;
