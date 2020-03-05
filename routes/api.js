const router = require("express").Router();
const db = require("../models");

module.exports = function(app) {
  // POST route for Workouts
  app.post("/api/workouts", function(req, res) {
    if (!req.session.user) {
      return res.json({ error: "You should login first" });
    }
    db.Workouts.create({
      UserId: req.session.user.id,
      body: req.body.body,
      date: req.body.date
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Get route Workouts
  app.get("/api/workouts/:id", function(req, res) {
    if (!req.session.user) {
      return res.json({ error: "You should login first" });
    }
    db.Workouts.findOne({
      where: {
        id: req.params.id,
        UserId: req.session.user.id
      },
      include: {
        model: db.Exersice,
        include: [db.User]
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  app.get("/api/workouts", function(req, res) {
    if (!req.session.user) {
      return res.json({ error: "You should login first" });
    }
    db.Workouts.findAll({
      where: {
        UserId: req.session.user.id
      },
      include: {
        model: db.Exersice,
        include: [db.User]
      }
    }).then(function(dbProject) {
      res.json(dbProject);
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
    db.Workouts.findOne({
      where: {
        id: req.params.id
      },
      include: {
        include: [db.User]
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // ############################
  //  Creating API-routes for ExerciseWorkouts

  app.post("/api/exercise-workouts", function(req, res) {
    if (!req.session.user) {
      return res.json({ error: "You should login first" });
    }
    db.ExerciseWorkout.create({
      sets: req.body.sets,
      repeats: req.body.repeats,
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

  app.get("/logout", function(req, res) {
    delete req.session.user;
    return res.json({ success: true });
  });
};
