const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Actor extends Model {}

Actor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // We do not need to define the movies column here because the association for <actor>.movies will be handled by sequelize with the through/junction table.
  },
  {
    sequelize,
    modelName: 'actor',
  }
);

module.exports = Actor;
