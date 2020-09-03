const router = require("express").Router();
const exerciseController = require("../../controllers/exerciseController"); // Haven't created yet "exerciseController"

// Matches with "/api/exercises"
router
  .route("/")
  .get(exerciseController.findAll)
  .post(exerciseController.create);

// /api/login
router.route("/").post(loginController.login);

// Matches with "/api/exercise/:id"
router
  .route("/:id")
  .get(exerciseController.findById)
  .put(exerciseController.update)
  .delete(exerciseController.remove);

module.exports = router;
