import React, { useEffect, useState } from "react";
import { List } from "./list";
import { Form } from "./form";
import { SingleWorkout } from "./single-workout";
import { AddExercise } from "./add-exercises-form";

export const Workouts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentWorkout, setCurrentWorkout] = useState(0);

  let title = "Workouts";

  return (
    <div className="Whole-page">
      <div className="header">
        <h1></h1>
      </div>
      {!currentPage && (
        <List
          setCurrentPage={setCurrentPage}
          setCurrentWorkout={setCurrentWorkout}
        />
      )}
      {currentPage == "add-workouts" && (
        <Form setCurrentPage={setCurrentPage} />
      )}
      {currentPage == "signle-workout" && (
        <SingleWorkout
          currentWorkout={currentWorkout}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage == "add-exercise" && (
        <AddExercise
          currentWorkout={currentWorkout}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};
