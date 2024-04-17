const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

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
    // when we define our through table, we can add any extra information to it that we want.
    character_name: {
      type: DataTypes.STRING,
    },
    performance_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      //check to make sure the rating is between 1 and 5
      validate: {
        isIn: {
          args: [[1, 2, 3, 4, 5]],
          msg: "Rating must be an integer between 1 and 5",
        },
      }
    },
    // sequelize will automatically build actor_id and movie_id columns
  },
  {
    sequelize,
    modelName: "actor_movie", //sequelize will make this table as actor_movies
    // freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = Actor_Movie;
