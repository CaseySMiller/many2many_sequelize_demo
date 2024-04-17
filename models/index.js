const Actor = require('./Actor');
const Movie = require('./Movie');
const Actor_Movie = require('./Actor_Movie');

// Define Many-Many Relationship
Actor.belongsToMany(Movie, { through: Actor_Movie });
Movie.belongsToMany(Actor, { through: Actor_Movie });

module.exports = {
  Actor,
  Movie,
  Actor_Movie,
};