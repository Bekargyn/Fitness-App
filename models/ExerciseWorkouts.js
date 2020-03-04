module.exports = function(sequelize, DataTypes) {
  var ExerciseWorkout = sequelize.define("ExerciseWorkout", {
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    repeats: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return ExerciseWorkout;
};
