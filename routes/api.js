const router = require("express").Router();
const db = require("../models");

module.exports = function(app) {
  // CreateWorkouts
  app.post("/api/workouts", function(req, res) {
    if (!req.session.user) {
      return res.json({ error: "You should login first" });
    }
    db.Workouts.create({
      UserId: req.session.user.id,
      name: req.body.name
      //date: req.body.date
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Get Single Workout
  app.get("/api/workouts/:id", function(req, res) {
    if (!req.session.user) {
      return res.json({ error: "You should login first" });
    }
    db.Workouts.findOne({
      where: {
        id: req.params.id,
        UserId: req.session.user.id
      },
      include: [{
        model: db.Exercise,
        as: "exercises"
      }]
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  //Get all workouts
  app.get("/api/workouts", function(req, res) {
    if (!req.session.user) {
      return res.json({ error: "You should login first" });
    }
    db.Workouts.findAll({
      where: {
        UserId: req.session.user.id
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // #######################
  // Delete workout
  app.post("/api/workouts/delete", (req, res) => {
    //remove from pivot table
    db.ExerciseWorkout.destroy({
      where: {
        WorkoutId: req.body.id
      }
    })
    .then(()=>{
      //###########################
      //Removing from main table
      db.Workouts.destroy({
        where: {
          id: req.body.id
        }
      })
      .then(dbWorkouts => {
        res.json({success: true});
      })
      .catch(err => {
        res.status(400).json(err);
      });
      //############################
    })
    .catch(err => {
      res.status(400).json(err);
    });

  });

  // ############################
  // Get route NUTRITION
  app.get("/api/nutrition", function(req, res) {
    if (!req.session.user) {
      return res.json({ error: "You should login first" });
    }
    db.Nutrition.findAll({
      where: {
        UserId: req.session.user.id
      }
    }).then(function(dbNutrition) {
      res.json(dbNutrition);
    });
  });

  app.get("/api/nutrition/:id", function(req, res) {
    db.Nutrition.findOne({
      where: {
        id: req.params.id
      },
      include: {
        include: [db.User]
      }
    }).then(function(dbNutrition) {
      res.json(dbNutrition);
    });
  });

  //  POST Nutrition
  app.post("/api/nutrition", function(req, res) {
    db.Nutrition.create({
      food: req.body.food,
      calories: req.body.calories
    }).then(function(dbNutrition) {
      res.json(dbNutrition);
    });
  });
  // ##########################

  //  POST Exercise
  app.post("/api/exercise", function(req, res) {
    db.Exercise.create({
      name: req.body.name,
      description: req.body.description
    }).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });

  // Get route for EXERCISES
  app.get("/api/exercise/:id", function(req, res) {
    db.Exercise.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Search EXERCISES
  app.post("/api/search-exercise/", function(req, res) {
    let searchParams = {};
    if(req.body.category){
      searchParams.category = req.body.category;
    }
    db.Exercise.findAll({
      where: {
        ...searchParams
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Get route for EXERCISES
  app.get("/api/exercise-category", function(req, res) {
    db.Exercise.aggregate('category', 'DISTINCT', { plain: false })
    .then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // ############################
  //  Creating API-routes for ExerciseWorkouts



  app.post("/api/exercise-workouts/delete", function(req, res) {
    db.ExerciseWorkout.destroy({
      where: {
        ExerciseId: req.body.ExerciseId,
        WorkoutId: req.body.WorkoutId
      }
    }).then(dbWorkouts => {
      res.json({success: true});
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });
  app.post("/api/exercise-workouts", function(req, res) {
    if (!req.session.user) {
      return res.json({ error: "You should login first" });
    }
    if(!(req.body.WorkoutId && req.body.ExerciseId)){
      return res.json({ error: "Select Exercise" });
    }
    db.ExerciseWorkout.create({
      sets: req.body.sets ? req.body.sets : 0,
      repeats: req.body.repeats ? req.body.repeats : 0,
      WorkoutId: req.body.WorkoutId,
      ExerciseId: req.body.ExerciseId
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  //##################################################
  // Create, Sign-in and Logout
  app.post("/api/create-user", function(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.json({ error: "Please fill all inputs" });
    }
    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(exist => {
      if (exist) {
        return res.json({ error: "Such user alread exist" });
      } else {
        db.User.create({
          email: req.body.email,
          password: req.body.password,
          name: req.body.name,
          age: req.body.age,
          weight: req.body.weight
        }).then(result => {
          delete result.password;
          req.session.user = result;
          return res.json(result);
        });
      }
    });
  });

  app.post("/api/login", function(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.json({ error: "Please fill all inputs" });
    }
    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(exist => {
      if (!exist) {
        return res.json({ error: "User Doesn't exist" });
      } else if (!exist.validPassword(req.body.password)) {
        return res.json({ error: "Incorrect password" });
      } else {
        delete exist.password;
        req.session.user = exist;
        return res.json(exist);
      }
    });
  });

  app.get("/api/logout", function(req, res) {
    delete req.session.user;
    return res.json({ success: true });
  });
};
