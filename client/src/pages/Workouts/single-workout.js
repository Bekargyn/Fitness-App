import React, { useEffect, useState } from "react";
import axios from "axios";

//List of exer
export const SingleWorkout = props => {
  const [workoutList, setWorkoutList] = useState([]);


  const  getExerciseWorkoutList = () => {
    axios.get("/api/workouts/" + props.currentWorkout.id).then(data => {
      console.log(data);
      setWorkoutList(Array.isArray(data.data.exercises) ? data.data.exercises : []);
    });
  }

  useEffect(() => {
    getExerciseWorkoutList();
  }, []);

  const removeWorkoutExercise = (ExerciseWorkout) => {
    if (!window.confirm("Are you sure you want to delete it?")) return 0;
    axios({
              method: 'post',
              url: '/api/exercise-workouts/delete',
              data: {
                ExerciseId: ExerciseWorkout.ExerciseId,
                WorkoutId: ExerciseWorkout.WorkoutId,
              }
            }
    ).then(()=>{getExerciseWorkoutList()});
  }

  return (
    <div className="single-workout">
      <div className="header">
        <h1>
          {props.currentWorkout.name}
          <div onClick={()=>props.setCurrentPage(0)} className="btn btn-danger float-right">
            Back To Workouts
          </div>
          <div onClick={()=>props.setCurrentPage("add-exercise")} className="btn btn-success float-right mr-3">
            Add Exercise
          </div>
        </h1>
      </div>

      <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Exercise</th>
          <th scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">Equipment</th>
          <th scope="col">Repeats</th>
          <th scope="col">Sets</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        {workoutList.map((el,index)=>
          <tr key={el.id}>
            <th scope="row">{index + 1}</th>
            <td>{el.name}</td>
            <td>{el.description}</td>
            <td>{el.category}</td>
            <td>{el.equipment}</td>
            <td>{el.ExerciseWorkout.repeats}</td>
            <td>{el.ExerciseWorkout.sets}</td>
            <td><button className="btn btn-danger" onClick={(e) =>{ e.stopPropagation(); removeWorkoutExercise(el.ExerciseWorkout)}}>X</button></td>
          </tr>
        )}

        </tbody>
      </table>

    </div>
  );
};
