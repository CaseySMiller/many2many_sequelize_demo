const Actor = require('./Actor');
const Movie = require('./Movie');
const Actor_Movie = require('./Actor_Movie');

// This is all that we need to create a basic many-to-many relationship between actors and movies
Actor.belongsToMany(Movie, { through: Actor_Movie });
Movie.belongsToMany(Actor, { through: Actor_Movie });
// If we didn't define the model for Actor_Movie, sequelize would create the table but we would have to create a new actor and movie to associate them


module.exports = {
  Actor,
  Movie,
  Actor_Movie,
};