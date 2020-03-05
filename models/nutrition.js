module.exports = function(sequelize, DataTypes) {
  var Nutrition = sequelize.define("Nutrition", {
    food: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    calories: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Nutrition.associate = function(models) {
    Nutrition.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Nutrition;
};
