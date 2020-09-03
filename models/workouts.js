module.exports = function(sequelize, DataTypes) {
  var Workouts = sequelize.define("Workouts", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Workouts.associate = function(models) {
    Workouts.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Workouts.belongsToMany(models.Exercise, {
      through: "ExerciseWorkout",
      as: "exercises"
    });
  };

  return Workouts;
};
