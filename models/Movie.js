const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // We do not need to define the actors column here because the association for <movie>.actors will be handled by sequelize with the through table.
  },
  {
    sequelize,
    modelName: 'movie',
  }
);

module.exports = Movie;