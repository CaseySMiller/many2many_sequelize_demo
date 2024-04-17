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
  },
  {
    sequelize,
    modelName: 'actor',
  }
);

module.exports = Actor;
