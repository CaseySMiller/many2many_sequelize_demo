const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Actor_Movie extends Model {}

// We are defining this model so that we can add associations directly without adding a new actor and movie
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

  // sequelize will automatically build actor_id and movie_id columns

  {
    sequelize,
    modelName: 'actor_movie', //sequelize will make this table as actor_movies
    // freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = Actor_Movie;