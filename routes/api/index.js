const router = require("express").Router();
const exerciseRoutes = require("./exercise");

// routes
router.use("/exercise", exerciseRoutes);
router.use("/workout", workoutRoutes);
router.use("/user", userRoutes);
router.use("/exerciseworkout", exerciseworkoutRoutes);

module.exports = router;
