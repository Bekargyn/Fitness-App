module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Exercise.associate = function(models) {
    Exercise.belongsToMany(models.Workouts, {
      onDelete: "CASCADE",
      through: "ExerciseWorkout"
    });
  };

  return Exercise;
};
