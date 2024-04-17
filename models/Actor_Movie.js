const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Actor_Movie extends Model {}

Actor_Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'actor_movie',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = Actor_Movie;